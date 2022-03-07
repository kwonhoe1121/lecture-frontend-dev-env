const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
//      {
//        test: /\.jpg$/,
//        loader: 'file-loader',
//        options: {
//          publicPath: path.resolve('./dist'),
//          name: '[name].[ext]?[hash]'
//        }
//      }
      {
        test: /\.jpg$/,
        loader: 'url-loader',
        options: {
          publicPath: path.resolve('./dist'),
          name: '[name].[ext]?[hash]',
          limit: 100000
        }
      }
    ]
  }
}
