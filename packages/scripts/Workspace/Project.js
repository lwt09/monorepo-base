class Project {
  constructor({ dir, config, workspace, type, extra, dirName }) {
    this.dir = dir;
    this.dirName = dirName;
    this.config = config;
    this.name = config.name;
    this.workspace = workspace;
    this.type = type;
    this.extra = extra;
  }
}

export const PROJECT_TYPE = {
  APP: 'APP',
  PACKAGE: 'PACKAGE',
};

export default Project;
