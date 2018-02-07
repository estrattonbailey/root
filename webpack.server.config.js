require('now-env')
const path = require('path')
const fs = require('fs')
const webpack = require('webpack');
const {
  NODE_ENV,
  URL
} = process.env
const PROD = NODE_ENV === 'production'

/**
 * @see http://jlongster.com/Backend-Apps-with-Webpack--Part-I
 */
const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
});

module.exports = {
  target: 'node',
  devtool: 'inline-source-map',
  entry: path.join(__dirname, './server/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'server.js'
  },
  externals: nodeModules,
  node: {
    console: true,
    __filename: true,
    __dirname: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      URL: JSON.stringify(URL)
    })
  ],
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
        include: [
          path.join(__dirname, './app'),
          path.join(__dirname, './server')
        ],
        loaders: ['babel-loader']
      }
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
  }
}
