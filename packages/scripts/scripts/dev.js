// 1. prebuid --watch
// 2. 在 apps/<appname> 找到对应的目录 pnpm dev

import summon from '../utils/summon';
import { checkApp, getAppName } from '../utils/checkUsage';
import Workspace from '../Workspace';

(function () {
  const [appName] = process.argv.slice(3);

  checkApp(appName, 'dev');

  const app = Workspace.default.apps.find((_) => getAppName(_) === appName);

  summon('npx', ['yarn', 'prebuild', '--watch'], {
    cwd: Workspace.default.root.dir,
    stdio: 'inherit',
  });

  summon.sync('npx', ['pnpm', 'dev'], {
    cwd: app.dir,
    stdio: 'inherit',
  });
})();
