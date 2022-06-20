import {
  spawnSync,
  SpawnSyncOptions,
} from 'child_process';
import * as os from 'os';
import * as path from 'path';

export function exec(command: string, args: string[], source: string, environments?: {
  [key: string]: string;
}) {
  const osPlatform = os.platform();
  const spawnSyncOptions: SpawnSyncOptions = {
    env: {
      ...process.env,
      ...environments,
    },
    stdio: [
      'ignore',
      process.stderr,
      'inherit',
    ],
    cwd: path.resolve(source),
    shell: true,
    windowsVerbatimArguments: osPlatform === 'win32',
  };
  const proc = spawnSync(command, args, spawnSyncOptions);
  if (proc.error) {
    throw proc.error;
  }
  if (proc.status !== 0) {
    if (proc.stdout || proc.stderr) {
      throw new Error(`[Status ${proc.status}] stdout: ${proc.stdout?.toString().trim()}\n\n\nstderr: ${proc.stderr?.toString().trim()}`);
    }
    throw new Error(`${command} exited with status ${proc.status}`);
  }
}