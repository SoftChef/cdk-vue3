export interface ClientConfigProps {
  /**
   * Filename in the web bucket key
   * @default config.js
   */
  readonly keyName?: string;
  /**
   * Specify client config map
   */
  readonly config?: {
    [key: string]: any;
  };
}