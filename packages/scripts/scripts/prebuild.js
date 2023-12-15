// 0. 在根目录执行命令，所以 process.cwd() 指向的是根目录
// 1. 以当前目录为工作区去执行babel命令
// 2. 那么就要指定输入的子  packages/src 的绝对路径以及 dist 的绝对路径来输出

import fs from 'fs';
import path from 'path';

import summon from '../utils/summon';
import { exists } from '../utils/file';

const execCwd = path.join(__dirname, '../');

const packagesDir = path.resolve(process.cwd(), 'packages');

// 获取所有子包目录
const pkgDir = fs
  .readdirSync(packagesDir)
  .map((dir) => {
    const packagePath = path.join(packagesDir, dir);
    return packagePath;
  })
  .filter((dir) => fs.statSync(dir).isDirectory());

const babelConfigFilePath = path.resolve(execCwd, './config/babel.config.js');

const args = process.argv.slice(3);
const needWatch = args.includes('--watch');

for (const dir of pkgDir) {
  if (!exists(path.resolve(dir, 'src'))) {
    continue;
  }

  const targetSrc = path.join(dir, 'src');
  const targetDist = path.join(dir, 'dist');

  summon(
    'babel',
    [
      targetSrc,
      '--out-dir',
      targetDist,
      needWatch && '--watch',
      '--copy-files',
      '--config-file',
      babelConfigFilePath,
    ],
    {
      stdio: 'inherit',
      cwd: execCwd,
    },
  );
}
