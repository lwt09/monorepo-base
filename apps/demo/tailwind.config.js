const config = require('@lwt/styles/tailwind.config');

module.exports = {
  ...config,
  corePlugins: {
    preflight: false,
  },
};
