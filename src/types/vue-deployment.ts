import {
  Distribution,
} from 'aws-cdk-lib/aws-cloudfront';
import {
  Bucket,
} from 'aws-cdk-lib/aws-s3';
import {
  BundlingProps,
  ClientConfigProps,
  DistributionProps,
} from '.';

export interface VueDeploymentProps {
  /**
   * VueJS source directory
   */
  readonly source: string;
  /**
   * Build script command
   * @default build
   */
  readonly buildCommand?: string;
  /**
   * Specify bundling options
   */
  readonly bundling?: BundlingProps;
  /**
   * Use target bucket or create new bucket
   */
  readonly bucket?: Bucket;
  /**
   * Specify S3 bucket name
   */
  readonly bucketName?: string;
  /**
   * S3 bucket prefix
   */
  readonly websiteDirectoryPrefix?: string;
  /**
   * Bucket Deployment memoryLimit
   */
  readonly memoryLimit?: number;
  /**
   * Prune S3 bucket files
   * @default false
   */
  readonly prune?: boolean;
  /**
   * Retain S3 bucket files on delete stack
   * @default false
   */
  readonly retainOnDelete?: boolean;
  /**
   * Specify client config options
   */
  readonly clientConfig?: ClientConfigProps;
  /**
   * Enable CloudFront distribution
   * @default false
   */
  readonly enableDistribution?: boolean;
  /**
   * CloudFront distribution
   */
  readonly distribution?: Distribution | DistributionProps;
}