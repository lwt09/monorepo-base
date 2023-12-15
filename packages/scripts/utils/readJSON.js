import { readFileSync } from 'fs';

function readJSON(path) {
  return JSON.parse(readFileSync(path, 'utf-8'));
}

export default readJSON;
