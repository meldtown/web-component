const path = require('path');

module.exports = {
  entry: './web-components.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'web-components.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },
  devtool: 'eval-source-map',
  mode: 'development',
  watch: true
};
