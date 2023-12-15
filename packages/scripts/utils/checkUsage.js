import colors from 'colors';
import Workspace from '../Workspace';

export function getAppName(app) {
  return app.name.replace('@lwt/app-', '');
}

export function checkApp(appName, command) {
  if (!appName) {
    console.log(`Unexpected usage. Please follow:\n    yarn ${command} <app_name> [<app_name>...]`);
    process.exit(1);
  }

  const appNames = Workspace.default.apps.map(getAppName);
  if (!appNames.includes(appName)) {
    console.log(colors.red('<app_name> not matched.'));
    console.log(
      `These are all app_name:\n${appNames.map((_) => colors.green(`   ${_}`)).join('\n')}`,
    );
    console.log(
      `The prop ${colors.brightBlue(
        'name',
      )} of package.json in app's dir should be as format「${colors.brightBlue('@lwt/app-xxx')}」`,
    );
    process.exit(1);
  }
}
