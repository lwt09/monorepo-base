// 打开下面的注释的话，是不通过eslint --fix 的
// const ab = b;

const clientFn = () => {
  console.log('call fn');
  return 'hi';
};

// eslint-disable-next-line import/prefer-default-export
export { clientFn };
