# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VueDeployment <a name="VueDeployment" id="@softchef/cdk-vue3.VueDeployment"></a>

#### Initializers <a name="Initializers" id="@softchef/cdk-vue3.VueDeployment.Initializer"></a>

```typescript
import { VueDeployment } from '@softchef/cdk-vue3'

new VueDeployment(scope: Construct, id: string, props: VueDeploymentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@softchef/cdk-vue3.VueDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@softchef/cdk-vue3.VueDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@softchef/cdk-vue3.VueDeployment.Initializer.parameter.props">props</a></code> | <code><a href="#@softchef/cdk-vue3.VueDeploymentProps">VueDeploymentProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@softchef/cdk-vue3.VueDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@softchef/cdk-vue3.VueDeployment.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@softchef/cdk-vue3.VueDeployment.Initializer.parameter.props"></a>

- *Type:* <a href="#@softchef/cdk-vue3.VueDeploymentProps">VueDeploymentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@softchef/cdk-vue3.VueDeployment.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@softchef/cdk-vue3.VueDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@softchef/cdk-vue3.VueDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@softchef/cdk-vue3.VueDeployment.isConstruct"></a>

```typescript
import { VueDeployment } from '@softchef/cdk-vue3'

VueDeployment.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@softchef/cdk-vue3.VueDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@softchef/cdk-vue3.VueDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@softchef/cdk-vue3.VueDeployment.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |
| <code><a href="#@softchef/cdk-vue3.VueDeployment.property.bucketDeployment">bucketDeployment</a></code> | <code>aws-cdk-lib.aws_s3_deployment.BucketDeployment</code> | *No description.* |
| <code><a href="#@softchef/cdk-vue3.VueDeployment.property.uploadConfigResource">uploadConfigResource</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |
| <code><a href="#@softchef/cdk-vue3.VueDeployment.property.cloudfrontDistribution">cloudfrontDistribution</a></code> | <code>aws-cdk-lib.aws_cloudfront.Distribution</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@softchef/cdk-vue3.VueDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@softchef/cdk-vue3.VueDeployment.property.bucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---

##### `bucketDeployment`<sup>Required</sup> <a name="bucketDeployment" id="@softchef/cdk-vue3.VueDeployment.property.bucketDeployment"></a>

```typescript
public readonly bucketDeployment: BucketDeployment;
```

- *Type:* aws-cdk-lib.aws_s3_deployment.BucketDeployment

---

##### `uploadConfigResource`<sup>Required</sup> <a name="uploadConfigResource" id="@softchef/cdk-vue3.VueDeployment.property.uploadConfigResource"></a>

```typescript
public readonly uploadConfigResource: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---

##### `cloudfrontDistribution`<sup>Optional</sup> <a name="cloudfrontDistribution" id="@softchef/cdk-vue3.VueDeployment.property.cloudfrontDistribution"></a>

```typescript
public readonly cloudfrontDistribution: Distribution;
```

- *Type:* aws-cdk-lib.aws_cloudfront.Distribution

---


## Structs <a name="Structs" id="Structs"></a>

### BundlingProps <a name="BundlingProps" id="@softchef/cdk-vue3.BundlingProps"></a>

#### Initializer <a name="Initializer" id="@softchef/cdk-vue3.BundlingProps.Initializer"></a>

```typescript
import { BundlingProps } from '@softchef/cdk-vue3'

const bundlingProps: BundlingProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@softchef/cdk-vue3.BundlingProps.property.buildCommand">buildCommand</a></code> | <code>string</code> | Build script command. |
| <code><a href="#@softchef/cdk-vue3.BundlingProps.property.bundlingArguments">bundlingArguments</a></code> | <code>string</code> | Specify bundling arguments when run build. |
| <code><a href="#@softchef/cdk-vue3.BundlingProps.property.environments">environments</a></code> | <code>{[ key: string ]: string}</code> | Specify environments on bundling. |
| <code><a href="#@softchef/cdk-vue3.BundlingProps.property.nodeImage">nodeImage</a></code> | <code>string</code> | Specify docker node version. |
| <code><a href="#@softchef/cdk-vue3.BundlingProps.property.runsLocally">runsLocally</a></code> | <code>boolean</code> | Runs bunding command locally. |
| <code><a href="#@softchef/cdk-vue3.BundlingProps.property.tool">tool</a></code> | <code>string</code> | Bundling tool, Vite or VueCLI. |

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="@softchef/cdk-vue3.BundlingProps.property.buildCommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* string

Build script command.

---

##### `bundlingArguments`<sup>Optional</sup> <a name="bundlingArguments" id="@softchef/cdk-vue3.BundlingProps.property.bundlingArguments"></a>

```typescript
public readonly bundlingArguments: string;
```

- *Type:* string

Specify bundling arguments when run build.

---

##### `environments`<sup>Optional</sup> <a name="environments" id="@softchef/cdk-vue3.BundlingProps.property.environments"></a>

```typescript
public readonly environments: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specify environments on bundling.

---

##### `nodeImage`<sup>Optional</sup> <a name="nodeImage" id="@softchef/cdk-vue3.BundlingProps.property.nodeImage"></a>

```typescript
public readonly nodeImage: string;
```

- *Type:* string

Specify docker node version.

---

##### `runsLocally`<sup>Optional</sup> <a name="runsLocally" id="@softchef/cdk-vue3.BundlingProps.property.runsLocally"></a>

```typescript
public readonly runsLocally: boolean;
```

- *Type:* boolean
- *Default:* false

Runs bunding command locally.

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@softchef/cdk-vue3.BundlingProps.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

Bundling tool, Vite or VueCLI.

---

### ClientConfigProps <a name="ClientConfigProps" id="@softchef/cdk-vue3.ClientConfigProps"></a>

#### Initializer <a name="Initializer" id="@softchef/cdk-vue3.ClientConfigProps.Initializer"></a>

```typescript
import { ClientConfigProps } from '@softchef/cdk-vue3'

const clientConfigProps: ClientConfigProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@softchef/cdk-vue3.ClientConfigProps.property.config">config</a></code> | <code>{[ key: string ]: any}</code> | Specify client config map. |
| <code><a href="#@softchef/cdk-vue3.ClientConfigProps.property.keyName">keyName</a></code> | <code>string</code> | Filename in the web bucket key. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@softchef/cdk-vue3.ClientConfigProps.property.config"></a>

```typescript
public readonly config: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Specify client config map.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@softchef/cdk-vue3.ClientConfigProps.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string
- *Default:* config.js

Filename in the web bucket key.

---

### DistributionProps <a name="DistributionProps" id="@softchef/cdk-vue3.DistributionProps"></a>

#### Initializer <a name="Initializer" id="@softchef/cdk-vue3.DistributionProps.Initializer"></a>

```typescript
import { DistributionProps } from '@softchef/cdk-vue3'

const distributionProps: DistributionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@softchef/cdk-vue3.DistributionProps.property.defaultBehavior">defaultBehavior</a></code> | <code>aws-cdk-lib.aws_cloudfront.BehaviorOptions</code> | The default behavior for the distribution. |
| <code><a href="#@softchef/cdk-vue3.DistributionProps.property.additionalBehaviors">additionalBehaviors</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_cloudfront.BehaviorOptions}</code> | Additional behaviors for the distribution, mapped by the pathPattern that specifies which requests to apply the behavior to. |
| <code><a href="#@softchef/cdk-vue3.DistributionProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | A certificate to associate with the distribution. |
| <code><a href="#@softchef/cdk-vue3.DistributionProps.property.comment">comment</a></code> | <code>string</code> | Any comments you want to include about the distribution. |
| <code><a href="#@softchef/cdk-vue3.DistributionProps.property.defaultRootObject">defaultRootObject</a></code> | <code>string</code> | The object that you want CloudFront to request from your origin (for example, index.html) when a viewer requests the root URL for your distribution. If no default object is set, the request goes to the origin's root (e.g., example.com/). |
| <code><a href="#@softchef/cdk-vue3.DistributionProps.property.domainNames">domainNames</a></code> | <code>string[]</code> | Alternative domain names for this distribution. |
| <code><a href="#@softchef/cdk-vue3.DistributionProps.property.enabled">enabled</a></code> | <code>boolean</code> | Enable or disable the distribution. |
| <code><a href="#@softchef/cdk-vue3.DistributionProps.property.enableIpv6">enableIpv6</a></code> | <code>boolean</code> | Whether CloudFront will respond to IPv6 DNS requests with an IPv6 address. |
| <code><a href="#@softchef/cdk-vue3.DistributionProps.property.enableLogging">enableLogging</a></code> | <code>boolean</code> | Enable access logging for the distribution. |
| <code><a href="#@softchef/cdk-vue3.DistributionProps.property.errorResponses">errorResponses</a></code> | <code>aws-cdk-lib.aws_cloudfront.ErrorResponse[]</code> | How CloudFront should handle requests that are not successful (e.g., PageNotFound). |
| <code><a href="#@softchef/cdk-vue3.DistributionProps.property.geoRestriction">geoRestriction</a></code> | <code>aws-cdk-lib.aws_cloudfront.GeoRestriction</code> | Controls the countries in which your content is distributed. |
| <code><a href="#@softchef/cdk-vue3.DistributionProps.property.httpVersion">httpVersion</a></code> | <code>aws-cdk-lib.aws_cloudfront.HttpVersion</code> | Specify the maximum HTTP version that you want viewers to use to communicate with CloudFront. |
| <code><a href="#@softchef/cdk-vue3.DistributionProps.property.logBucket">logBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The Amazon S3 bucket to store the access logs in. |
| <code><a href="#@softchef/cdk-vue3.DistributionProps.property.logFilePrefix">logFilePrefix</a></code> | <code>string</code> | An optional string that you want CloudFront to prefix to the access log filenames for this distribution. |
| <code><a href="#@softchef/cdk-vue3.DistributionProps.property.logIncludesCookies">logIncludesCookies</a></code> | <code>boolean</code> | Specifies whether you want CloudFront to include cookies in access logs. |
| <code><a href="#@softchef/cdk-vue3.DistributionProps.property.minimumProtocolVersion">minimumProtocolVersion</a></code> | <code>aws-cdk-lib.aws_cloudfront.SecurityPolicyProtocol</code> | The minimum version of the SSL protocol that you want CloudFront to use for HTTPS connections. |
| <code><a href="#@softchef/cdk-vue3.DistributionProps.property.priceClass">priceClass</a></code> | <code>aws-cdk-lib.aws_cloudfront.PriceClass</code> | The price class that corresponds with the maximum price that you want to pay for CloudFront service. |
| <code><a href="#@softchef/cdk-vue3.DistributionProps.property.webAclId">webAclId</a></code> | <code>string</code> | Unique identifier that specifies the AWS WAF web ACL to associate with this CloudFront distribution. |
| <code><a href="#@softchef/cdk-vue3.DistributionProps.property.websiteDirectoryPrefix">websiteDirectoryPrefix</a></code> | <code>string</code> | S3 bucket prefix. |

---

##### `defaultBehavior`<sup>Required</sup> <a name="defaultBehavior" id="@softchef/cdk-vue3.DistributionProps.property.defaultBehavior"></a>

```typescript
public readonly defaultBehavior: BehaviorOptions;
```

- *Type:* aws-cdk-lib.aws_cloudfront.BehaviorOptions

The default behavior for the distribution.

---

##### `additionalBehaviors`<sup>Optional</sup> <a name="additionalBehaviors" id="@softchef/cdk-vue3.DistributionProps.property.additionalBehaviors"></a>

```typescript
public readonly additionalBehaviors: {[ key: string ]: BehaviorOptions};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_cloudfront.BehaviorOptions}
- *Default:* no additional behaviors are added.

Additional behaviors for the distribution, mapped by the pathPattern that specifies which requests to apply the behavior to.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@softchef/cdk-vue3.DistributionProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate
- *Default:* the CloudFront wildcard certificate (*.cloudfront.net) will be used.

A certificate to associate with the distribution.

The certificate must be located in N. Virginia (us-east-1).

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@softchef/cdk-vue3.DistributionProps.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string
- *Default:* no comment

Any comments you want to include about the distribution.

---

##### `defaultRootObject`<sup>Optional</sup> <a name="defaultRootObject" id="@softchef/cdk-vue3.DistributionProps.property.defaultRootObject"></a>

```typescript
public readonly defaultRootObject: string;
```

- *Type:* string
- *Default:* no default root object

The object that you want CloudFront to request from your origin (for example, index.html) when a viewer requests the root URL for your distribution. If no default object is set, the request goes to the origin's root (e.g., example.com/).

---

##### `domainNames`<sup>Optional</sup> <a name="domainNames" id="@softchef/cdk-vue3.DistributionProps.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]
- *Default:* The distribution will only support the default generated name (e.g., d111111abcdef8.cloudfront.net)

Alternative domain names for this distribution.

If you want to use your own domain name, such as www.example.com, instead of the cloudfront.net domain name,
you can add an alternate domain name to your distribution. If you attach a certificate to the distribution,
you must add (at least one of) the domain names of the certificate to this list.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@softchef/cdk-vue3.DistributionProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

Enable or disable the distribution.

---

##### `enableIpv6`<sup>Optional</sup> <a name="enableIpv6" id="@softchef/cdk-vue3.DistributionProps.property.enableIpv6"></a>

```typescript
public readonly enableIpv6: boolean;
```

- *Type:* boolean
- *Default:* true

Whether CloudFront will respond to IPv6 DNS requests with an IPv6 address.

If you specify false, CloudFront responds to IPv6 DNS requests with the DNS response code NOERROR and with no IP addresses.
This allows viewers to submit a second request, for an IPv4 address for your distribution.

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@softchef/cdk-vue3.DistributionProps.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean;
```

- *Type:* boolean
- *Default:* false, unless `logBucket` is specified.

Enable access logging for the distribution.

---

##### `errorResponses`<sup>Optional</sup> <a name="errorResponses" id="@softchef/cdk-vue3.DistributionProps.property.errorResponses"></a>

```typescript
public readonly errorResponses: ErrorResponse[];
```

- *Type:* aws-cdk-lib.aws_cloudfront.ErrorResponse[]
- *Default:* No custom error responses.

How CloudFront should handle requests that are not successful (e.g., PageNotFound).

---

##### `geoRestriction`<sup>Optional</sup> <a name="geoRestriction" id="@softchef/cdk-vue3.DistributionProps.property.geoRestriction"></a>

```typescript
public readonly geoRestriction: GeoRestriction;
```

- *Type:* aws-cdk-lib.aws_cloudfront.GeoRestriction
- *Default:* No geographic restrictions

Controls the countries in which your content is distributed.

---

##### `httpVersion`<sup>Optional</sup> <a name="httpVersion" id="@softchef/cdk-vue3.DistributionProps.property.httpVersion"></a>

```typescript
public readonly httpVersion: HttpVersion;
```

- *Type:* aws-cdk-lib.aws_cloudfront.HttpVersion
- *Default:* HttpVersion.HTTP2

Specify the maximum HTTP version that you want viewers to use to communicate with CloudFront.

For viewers and CloudFront to use HTTP/2, viewers must support TLS 1.2 or later, and must support server name identification (SNI).

---

##### `logBucket`<sup>Optional</sup> <a name="logBucket" id="@softchef/cdk-vue3.DistributionProps.property.logBucket"></a>

```typescript
public readonly logBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* A bucket is created if `enableLogging` is true

The Amazon S3 bucket to store the access logs in.

---

##### `logFilePrefix`<sup>Optional</sup> <a name="logFilePrefix" id="@softchef/cdk-vue3.DistributionProps.property.logFilePrefix"></a>

```typescript
public readonly logFilePrefix: string;
```

- *Type:* string
- *Default:* no prefix

An optional string that you want CloudFront to prefix to the access log filenames for this distribution.

---

##### `logIncludesCookies`<sup>Optional</sup> <a name="logIncludesCookies" id="@softchef/cdk-vue3.DistributionProps.property.logIncludesCookies"></a>

```typescript
public readonly logIncludesCookies: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies whether you want CloudFront to include cookies in access logs.

---

##### `minimumProtocolVersion`<sup>Optional</sup> <a name="minimumProtocolVersion" id="@softchef/cdk-vue3.DistributionProps.property.minimumProtocolVersion"></a>

```typescript
public readonly minimumProtocolVersion: SecurityPolicyProtocol;
```

- *Type:* aws-cdk-lib.aws_cloudfront.SecurityPolicyProtocol
- *Default:* SecurityPolicyProtocol.TLS_V1_2_2021 if the '

The minimum version of the SSL protocol that you want CloudFront to use for HTTPS connections.

CloudFront serves your objects only to browsers or devices that support at
least the SSL version that you specify.

---

##### `priceClass`<sup>Optional</sup> <a name="priceClass" id="@softchef/cdk-vue3.DistributionProps.property.priceClass"></a>

```typescript
public readonly priceClass: PriceClass;
```

- *Type:* aws-cdk-lib.aws_cloudfront.PriceClass
- *Default:* PriceClass.PRICE_CLASS_ALL

The price class that corresponds with the maximum price that you want to pay for CloudFront service.

If you specify PriceClass_All, CloudFront responds to requests for your objects from all CloudFront edge locations.
If you specify a price class other than PriceClass_All, CloudFront serves your objects from the CloudFront edge location
that has the lowest latency among the edge locations in your price class.

---

##### `webAclId`<sup>Optional</sup> <a name="webAclId" id="@softchef/cdk-vue3.DistributionProps.property.webAclId"></a>

```typescript
public readonly webAclId: string;
```

- *Type:* string
- *Default:* No AWS Web Application Firewall web access control list (web ACL).

Unique identifier that specifies the AWS WAF web ACL to associate with this CloudFront distribution.

To specify a web ACL created using the latest version of AWS WAF, use the ACL ARN, for example
`arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a`.
To specify a web ACL created using AWS WAF Classic, use the ACL ID, for example `473e64fd-f30b-4765-81a0-62ad96dd167a`.

> [https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html#API_CreateDistribution_RequestParameters.](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html#API_CreateDistribution_RequestParameters.)

---

##### `websiteDirectoryPrefix`<sup>Required</sup> <a name="websiteDirectoryPrefix" id="@softchef/cdk-vue3.DistributionProps.property.websiteDirectoryPrefix"></a>

```typescript
public readonly websiteDirectoryPrefix: string;
```

- *Type:* string

S3 bucket prefix.

---

### VueDeploymentProps <a name="VueDeploymentProps" id="@softchef/cdk-vue3.VueDeploymentProps"></a>

#### Initializer <a name="Initializer" id="@softchef/cdk-vue3.VueDeploymentProps.Initializer"></a>

```typescript
import { VueDeploymentProps } from '@softchef/cdk-vue3'

const vueDeploymentProps: VueDeploymentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@softchef/cdk-vue3.VueDeploymentProps.property.source">source</a></code> | <code>string</code> | VueJS source directory. |
| <code><a href="#@softchef/cdk-vue3.VueDeploymentProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | Use target bucket or create new bucket. |
| <code><a href="#@softchef/cdk-vue3.VueDeploymentProps.property.bucketName">bucketName</a></code> | <code>string</code> | Specify S3 bucket name. |
| <code><a href="#@softchef/cdk-vue3.VueDeploymentProps.property.buildCommand">buildCommand</a></code> | <code>string</code> | Build script command. |
| <code><a href="#@softchef/cdk-vue3.VueDeploymentProps.property.bundling">bundling</a></code> | <code><a href="#@softchef/cdk-vue3.BundlingProps">BundlingProps</a></code> | Specify bundling options. |
| <code><a href="#@softchef/cdk-vue3.VueDeploymentProps.property.clientConfig">clientConfig</a></code> | <code><a href="#@softchef/cdk-vue3.ClientConfigProps">ClientConfigProps</a></code> | Specify client config options. |
| <code><a href="#@softchef/cdk-vue3.VueDeploymentProps.property.distribution">distribution</a></code> | <code>aws-cdk-lib.aws_cloudfront.Distribution \| <a href="#@softchef/cdk-vue3.DistributionProps">DistributionProps</a></code> | CloudFront distribution. |
| <code><a href="#@softchef/cdk-vue3.VueDeploymentProps.property.enableDistribution">enableDistribution</a></code> | <code>boolean</code> | Enable CloudFront distribution. |
| <code><a href="#@softchef/cdk-vue3.VueDeploymentProps.property.memoryLimit">memoryLimit</a></code> | <code>number</code> | Bucket Deployment memoryLimit. |
| <code><a href="#@softchef/cdk-vue3.VueDeploymentProps.property.prune">prune</a></code> | <code>boolean</code> | Prune S3 bucket files, default false. |
| <code><a href="#@softchef/cdk-vue3.VueDeploymentProps.property.retainOnDelete">retainOnDelete</a></code> | <code>boolean</code> | Retain S3 bucket files on delete stack, default false. |
| <code><a href="#@softchef/cdk-vue3.VueDeploymentProps.property.websiteDirectoryPrefix">websiteDirectoryPrefix</a></code> | <code>string</code> | S3 bucket prefix. |

---

##### `source`<sup>Required</sup> <a name="source" id="@softchef/cdk-vue3.VueDeploymentProps.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

VueJS source directory.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@softchef/cdk-vue3.VueDeploymentProps.property.bucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

Use target bucket or create new bucket.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@softchef/cdk-vue3.VueDeploymentProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Specify S3 bucket name.

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="@softchef/cdk-vue3.VueDeploymentProps.property.buildCommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* string
- *Default:* build

Build script command.

---

##### `bundling`<sup>Optional</sup> <a name="bundling" id="@softchef/cdk-vue3.VueDeploymentProps.property.bundling"></a>

```typescript
public readonly bundling: BundlingProps;
```

- *Type:* <a href="#@softchef/cdk-vue3.BundlingProps">BundlingProps</a>

Specify bundling options.

---

##### `clientConfig`<sup>Optional</sup> <a name="clientConfig" id="@softchef/cdk-vue3.VueDeploymentProps.property.clientConfig"></a>

```typescript
public readonly clientConfig: ClientConfigProps;
```

- *Type:* <a href="#@softchef/cdk-vue3.ClientConfigProps">ClientConfigProps</a>

Specify client config options.

---

##### `distribution`<sup>Optional</sup> <a name="distribution" id="@softchef/cdk-vue3.VueDeploymentProps.property.distribution"></a>

```typescript
public readonly distribution: Distribution | DistributionProps;
```

- *Type:* aws-cdk-lib.aws_cloudfront.Distribution | <a href="#@softchef/cdk-vue3.DistributionProps">DistributionProps</a>

CloudFront distribution.

---

##### `enableDistribution`<sup>Optional</sup> <a name="enableDistribution" id="@softchef/cdk-vue3.VueDeploymentProps.property.enableDistribution"></a>

```typescript
public readonly enableDistribution: boolean;
```

- *Type:* boolean
- *Default:* true

Enable CloudFront distribution.

---

##### `memoryLimit`<sup>Optional</sup> <a name="memoryLimit" id="@softchef/cdk-vue3.VueDeploymentProps.property.memoryLimit"></a>

```typescript
public readonly memoryLimit: number;
```

- *Type:* number

Bucket Deployment memoryLimit.

---

##### `prune`<sup>Optional</sup> <a name="prune" id="@softchef/cdk-vue3.VueDeploymentProps.property.prune"></a>

```typescript
public readonly prune: boolean;
```

- *Type:* boolean

Prune S3 bucket files, default false.

---

##### `retainOnDelete`<sup>Optional</sup> <a name="retainOnDelete" id="@softchef/cdk-vue3.VueDeploymentProps.property.retainOnDelete"></a>

```typescript
public readonly retainOnDelete: boolean;
```

- *Type:* boolean

Retain S3 bucket files on delete stack, default false.

---

##### `websiteDirectoryPrefix`<sup>Optional</sup> <a name="websiteDirectoryPrefix" id="@softchef/cdk-vue3.VueDeploymentProps.property.websiteDirectoryPrefix"></a>

```typescript
public readonly websiteDirectoryPrefix: string;
```

- *Type:* string

S3 bucket prefix.

---



