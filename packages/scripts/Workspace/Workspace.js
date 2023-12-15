import glob from 'glob';
import path from 'path';
import Project, { PROJECT_TYPE } from './Project';
import readJSON from '../utils/readJSON';

class Workspace {
  constructor() {
    const [rootProject] = this.load('');
    this.root = rootProject;
    this.apps = this.load('apps/*', PROJECT_TYPE.APP);
    this.packages = this.load('packages/*', PROJECT_TYPE.PACKAGE);
    this.projects = [...this.apps, ...this.packages];
    this.projectsMap = this.makeProjectsMap();
  }

  load(name, type = PROJECT_TYPE.PACKAGE) {
    const cwd = process.cwd();
    const pkgPattern = path.join(cwd, name, 'package.json');
    return glob.sync(pkgPattern).map((pkgFile) => {
      const dir = path.dirname(pkgFile);
      const dirNames = dir.split('/');

      return new Project({
        dir,
        dirName: dirNames[dirNames.length - 1],
        config: readJSON(pkgFile),
        workspace: this,
        type,
        extra: {},
      });
    });
  }

  makeProjectsMap() {
    return this.makeMapByFilter(() => true);
  }

  makeMapByFilter(filter = (_) => _) {
    const map = {};

    for (const pkg of this.projects) {
      if (!filter(pkg)) {
        continue;
      }
      map[pkg.name] = pkg;
    }

    return map;
  }
}

Workspace.default = new Workspace();

export default Workspace;
