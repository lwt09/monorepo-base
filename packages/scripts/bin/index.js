#!/usr/bin/env node

// 依赖 esm 是因为，如果换另一种实现方式即 type = module，为了开发方便需要运行 node --es-module-specifier-resolution=node
// 然而 node:16-alpine 镜像下开启这个选项会导致进程挂起，并且 es-module-specifier-resolution 本身也属于实验性选项，不建议使用
require = require('esm')(module); // eslint-disable-line

async function run() {
  const [script] = process.argv.slice(2);

  const scripts = [
    'prebuild',
    'doctor',
    'clean',
    'dev',
    'build',
    'build:test',
    'build:pro',
    'start',
    'create-app',
    'run-in',
  ];

  if (!scripts.includes(script)) {
    /* eslint-disable-next-line */
    console.log(
      `Unknown script "${script}". You may need to add it into this file:scripts/bin/amg-script.js`,
    );
    process.exit(1);
  }

  // eslint-disable-next-line
  require(`../scripts/${script}`);
}

run();
