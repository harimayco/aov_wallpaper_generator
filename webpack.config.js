const path = require('path');

module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, 'js')
  }
};