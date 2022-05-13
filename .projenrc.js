const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'MinCheTsai',
  authorAddress: 'minche@softchef.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-vue3',
  repositoryUrl: 'https://github.com/minche/cdk-vue3.git',
});
project.synth();