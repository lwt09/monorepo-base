import { existsSync, lstatSync } from 'fs';

function exists(path) {
  return existsSync(path);
}

function isDirectory(path) {
  return lstatSync(path).isDirectory();
}

export { exists, isDirectory };
