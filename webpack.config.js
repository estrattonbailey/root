require('now-env')
const webpack = require('webpack')
const path = require('path')
const {
  NODE_ENV,
  URL
} = process.env
const PROD = NODE_ENV === 'production'

module.exports = {
  devtool: 'inline-source-map',
  entry: path.join(__dirname, './app/index.js'),
  output: {
    path: path.join(__dirname, './public'),
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'standard-loader',
        exclude: /node_modules/,
        options: {
          parser: 'babel-eslint'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'app'),
        loaders: ['babel-loader']
      },
    ]
  },
  resolve: {
    alias: {
      components: path.join(__dirname, './app/components'),
      routes: path.join(__dirname, './app/routes'),
      app: path.join(__dirname, './app'),
      state: path.join(__dirname, './app/state'),
      actions: path.join(__dirname, './app/actions'),
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      URL: JSON.stringify(URL)
    })
  ]
}
