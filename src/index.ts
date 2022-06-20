import * as fs from 'fs';
import * as path from 'path';
import {
  CustomResource,
  Names,
  RemovalPolicy,
} from 'aws-cdk-lib';
import {
  Distribution,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import {
  S3Origin,
} from 'aws-cdk-lib/aws-cloudfront-origins';
import {
  CompositePrincipal,
  Effect,
  PolicyStatement,
  Role,
  ServicePrincipal,
} from 'aws-cdk-lib/aws-iam';
import {
  NodejsFunction,
} from 'aws-cdk-lib/aws-lambda-nodejs';
import {
  Bucket,
  HttpMethods,
} from 'aws-cdk-lib/aws-s3';
import {
  BucketDeployment,
  BucketDeploymentProps,
  ISource,
} from 'aws-cdk-lib/aws-s3-deployment';
import {
  Construct,
} from 'constructs';
import {
  DistributionProps,
  VueDeploymentProps,
} from './types';
import { ViteBundling } from './vite-bundling';

export class VueDeployment extends Construct {

  public readonly bucket: Bucket;

  public readonly bucketDeployment: BucketDeployment;

  public readonly cloudfrontDistribution: Distribution | undefined;

  public readonly uploadConfigResource: CustomResource;

  constructor(scope: Construct, id: string, props: VueDeploymentProps) {
    super(scope, id);
    this.bucket = props.bucket ? props.bucket : this.createBucket(props.bucketName);
    this.bucketDeployment = this.createBucketDeployment(props);
    this.uploadConfigResource = this.createUploadConfigResource(props);
    if (props.enableDistribution) {
      if (props.distribution instanceof Distribution) {
        this.cloudfrontDistribution = props.distribution;
      } else {
        this.cloudfrontDistribution = this.createCloudfrontDistribution(props.distribution);
      }
    }
  }

  private createBucket(name: string | undefined): Bucket {
    const bucket = new Bucket(this, Names.nodeUniqueId(this.node), {
      bucketName: name,
    });
    bucket.addCorsRule({
      allowedMethods: [
        HttpMethods.GET,
        HttpMethods.POST,
        HttpMethods.PUT,
        HttpMethods.HEAD,
        HttpMethods.DELETE,
      ],
      allowedOrigins: ['*'],
      allowedHeaders: ['*'],
    });
    return bucket;
  }

  private createBucketDeployment(props: VueDeploymentProps): BucketDeployment {
    let s3SourceAsset: ISource;
    switch (props.bundling?.tool) {
      case 'VueCLI':
        throw new Error('Just support Vite to bundling, VueCLI comming soon.');
      case 'Vite':
      default:
        s3SourceAsset = ViteBundling.bundling(props.source, props.bundling);
        break;
    }
    const bucketDeploymentProps: BucketDeploymentProps = {
      sources: [
        s3SourceAsset,
      ],
      destinationBucket: this.bucket,
      destinationKeyPrefix: props.websiteDirectoryPrefix ?? '/',
      memoryLimit: props.memoryLimit,
      prune: props.prune ?? false,
      retainOnDelete: props.retainOnDelete ?? false,
      distribution: this.cloudfrontDistribution,
    };
    return new BucketDeployment(this, 'DeployWebsite', bucketDeploymentProps);
  }

  private createUploadConfigResource(props: VueDeploymentProps): CustomResource {
    const updateConfigFunctionRole = new Role(this, 'UpdateConfigFunctionRole', {
      assumedBy: new CompositePrincipal(
        new ServicePrincipal('lambda.amazonaws.com'),
      ),
    });
    updateConfigFunctionRole.addToPolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: [
          's3:PutObject',
          's3:DeleteObject',
        ],
        resources: [
          `${this.bucket.bucketArn}/*`,
        ],
      }),
    );
    updateConfigFunctionRole.addToPolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: [
          'Logs:CreateLogGroup',
          'Logs:CreateLogStream',
          'Logs:PutLogEvents',
        ],
        resources: ['*'],
      }),
    );
    const uploadConfigFunction = new NodejsFunction(this, 'UploadConfigFunction', {
      entry: path.resolve(__dirname, '../functions/upload-config/app.js'),
      environment: {
        CONFIG_JS_STUB: fs.readFileSync(
          path.resolve(__dirname, '../functions/upload-config/config.stub.js'),
        ).toString(),
      },
      role: updateConfigFunctionRole,
    });
    const uploadConfig = new CustomResource(this, 'UploadConfig', {
      serviceToken: uploadConfigFunction.functionArn,
      pascalCaseProperties: false,
      properties: {
        bucketName: this.bucket.bucketName,
        configJsKeyName: props.clientConfig?.keyName ?? 'config.js',
        ...(props.clientConfig?.config ?? {}),
      },
      removalPolicy: RemovalPolicy.DESTROY,
    });
    uploadConfig.node.addDependency(this.bucketDeployment);
    return uploadConfig;
  }

  private createCloudfrontDistribution(distributionProps?: DistributionProps): Distribution {
    const websiteDirectoryPrefix: string = distributionProps?.websiteDirectoryPrefix.replace(/^\//, '') ?? '';
    const indexHtml = distributionProps?.defaultRootObject ?? 'index.html';
    return new Distribution(this, 'WebsiteDistribution', {
      ...distributionProps,
      defaultRootObject: indexHtml,
      defaultBehavior: {
        origin: new S3Origin(this.bucket, {
          originPath: `/${websiteDirectoryPrefix}`,
        }),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: `/${indexHtml}`,
        },
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: `/${indexHtml}`,
        },
      ],
    });
  }
}