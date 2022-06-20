import {
  DistributionProps as CloudfrontDistribution,
} from 'aws-cdk-lib/aws-cloudfront';

export interface DistributionProps extends CloudfrontDistribution {
  readonly websiteDirectoryPrefix: string;
}