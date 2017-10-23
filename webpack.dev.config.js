const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const nodeExternals = require('webpack-node-externals');

const config = {
  name: 'client',
  entry: ['./client/client.js'],
  output: {
    path: path.join(__dirname, 'dist', 'public'),
    filename: 'client.js',
    publicPath: path.join(__dirname, 'dist', 'public')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    alias: {
      'client': path.resolve(__dirname, 'client'),
      'server': path.resolve(__dirname, 'server')
    }
  }
};

const serverConfig = {
  name: 'server',
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  externals: [nodeExternals()],
  entry: [
    './server/server.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'null'
      },
      {
        test: /\.scss$/,
        loader: 'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'server', 'views'), to: path.join(__dirname, 'dist', 'views') }
    ]),
    // new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    alias: {
      'client': path.resolve(__dirname, 'client'),
      'server': path.resolve(__dirname, 'server')
    }
  }
};

module.exports = [config, serverConfig];