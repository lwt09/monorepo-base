import execa from 'execa';

function spawn(...args) {
  const child = execa(...args);

  child.on('exit', (code, signal) => {
    console.log(code, signal);

    if (signal) {
      process.exit(0);
    }

    if (code !== 0) {
      process.exit(code);
    }
  });

  return child;
}

spawn.sync = execa.sync;

export default spawn;
