import {
  DistributionProps as CloudfrontDistribution,
} from 'aws-cdk-lib/aws-cloudfront';

export interface DistributionProps extends CloudfrontDistribution {
  /**
   * S3 bucket prefix
   */
  readonly websiteDirectoryPrefix: string;
}