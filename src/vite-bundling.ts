import * as fs from 'fs';
import {
  AssetStaging,
  BundlingOptions,
  DockerImage,
  ILocalBundling,
} from 'aws-cdk-lib';
import {
  ISource,
  Source,
} from 'aws-cdk-lib/aws-s3-deployment';
import {
  BundlingProps,
} from './types/bundling';
import {
  exec,
} from './utils';

export class ViteBundling implements BundlingOptions {

  public static bundling(source: string, props?: BundlingProps): ISource {
    return Source.asset(
      source,
      {
        bundling: new ViteBundling(source, props),
      },
    );
  }

  private static runsLocally?: boolean | true;

  private static generateBundlingCommands(
    source: string,
    buildCommand: string,
    bundlingArguments: string,
    stage: string,
    outDir: string,
  ): string[][] {
    let dependencyManager: string = 'NPM';
    if (fs.existsSync(`${source}/yarn.lock`)) {
      dependencyManager = 'YARN';
    }
    const bundlingCommands: string[][] = [
      ['echo', `"Running on ${stage}"`],
      ['echo', '"Node version: $(node -v)"'],
    ];
    if (dependencyManager === 'NPM') {
      bundlingCommands.push(...[
        ['echo', '"Npm version: $(npm -v)"'],
        ['npm', 'install', '--cache=./.cache'],
        ['npm', 'run', buildCommand, '--', bundlingArguments, '--outDir', outDir, '--emptyOutDir'],
        ['rm -Rf ./.cache'],
      ]);
    } else {
      bundlingCommands.push(...[
        ['echo', '"Yarn version: $(yarn -v)"'],
        ['yarn', 'install', '--cache-folder', './.cache'],
        ['yarn', buildCommand, '--', bundlingArguments, '--outDir', outDir, '--emptyOutDir'],
        ['rm', '-Rf', './.cache'],
      ]);
    }
    return bundlingCommands;
  }

  public readonly image: DockerImage;

  public readonly command?: string[] | undefined;

  public readonly environment?: { [key: string]: string } | {};

  public readonly bundlingArguments?: string | '';

  public readonly local?: ILocalBundling | undefined;

  constructor(source: string, props?: BundlingProps) {
    ViteBundling.runsLocally = props?.runsLocally ?? false;
    this.image = DockerImage.fromRegistry(`${props?.nodeImage ?? 'public.ecr.aws/bitnami/node'}`);
    if (ViteBundling.runsLocally) {
      this.image = DockerImage.fromRegistry('williamyeh/dummy');
    }
    const stage: string = 'Docker';
    const bundlingCommands: string[][] = ViteBundling.generateBundlingCommands(source, props?.buildCommand ?? 'build', props?.bundlingArguments ?? '', stage, AssetStaging.BUNDLING_OUTPUT_DIR);
    this.command = ['bash', '-c', bundlingCommands.map(bundlingCommand => bundlingCommand.join(' ')).join(';')];
    this.local = {
      tryBundle(outputDir: string) {
        if (ViteBundling.runsLocally === false) {
          process.stderr.write('Vite cannot run locally. Switching to Docker bundling.\n');
          return false;
        }
        try {
          const localStage: string = 'Locally';
          const localBundlingCommands: string[][] = ViteBundling.generateBundlingCommands(source, props?.buildCommand ?? 'build', props?.bundlingArguments ?? '', localStage, outputDir);
          for (const localBundlingCommand of localBundlingCommands) {
            const command: string = localBundlingCommand.shift()!;
            const args: string[] = localBundlingCommand;
            exec(command, args, source, props?.environments);
          }
          return true;
        } catch (error) {
          return false;
        }
      },
    };
  }

}