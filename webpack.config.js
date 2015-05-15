const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, "dist"),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: '/node_modules/', loader: 'babel-loader' },
      { test: /\.(handlebars|hbs)$$/, loader: 'handlebars-loader' },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss']
  }
};
