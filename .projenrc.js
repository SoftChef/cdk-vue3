const { awscdk, AUTOMATION_TOKEN } = require('projen');
const { NpmAccess } = require('projen/lib/javascript');

const PROJECT_NAME = '@softchef/cdk-vue3';
const PROJECT_DESCRIPTION = 'Auto deploy website with VueJs 3 to S3 bucket and CloudFront distribution.';

const project = new awscdk.AwsCdkConstructLibrary({
  authorName: 'SoftChef',
  authorEmail: 'poke@softchef.com',
  authorUrl: 'https://www.softchef.com',
  authorOrganization: true,
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  npmAccess: NpmAccess.PUBLIC,
  repositoryUrl: 'https://github.com/softchef/cdk-vue3.git',
  cdkVersion: '2.1.0',
  majorVersion: 2,
  defaultReleaseBranch: 'main',
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      secret: AUTOMATION_TOKEN,
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['MinCheTsai'],
  },
  keywords: [
    'aws',
    'cdk',
    'vue',
    'vuejs',
    'vue3',
    'cloudfront',
    'cdn',
    'web',
  ],
});

const commonExclude = [
  'cdk.out',
  'cdk.context.json',
  'yarn-error.log',
];

project.npmignore.exclude(...commonExclude);
project.gitignore.exclude(...commonExclude);

project.synth();