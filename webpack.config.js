const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './assets/scripts/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  mode: "development",
  watch: true,
};
