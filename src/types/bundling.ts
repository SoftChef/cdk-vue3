export interface BundlingProps {
  /**
   * Specify bundling arguments when run build
   */
  readonly bundlingArguments?: string;
  /**
   * Specify environments on bundling
   */
  readonly environments?: {
    [ key: string ]: string;
  };
  /**
   * Bundling tool, Vite or VueCLI
   */
  readonly tool?: 'Vite' | 'VueCLI';
  /**
   * Runs bunding command locally
   * @default false
   */
  readonly runsLocally?: boolean;
  /**
   * Force use docker to bundling
   * @default false
   */
  // readonly forceDockerBundling?: boolean;
  /**
   * Specify docker node version
   */
  readonly nodeImage?: string | 'public.ecr.aws/bitnami/node';
}