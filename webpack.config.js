const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: __dirname,
  mode: "development",
  entry: {
    app: './src/app.js',

  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ""
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env']
        }
      }
    },
    {
      test: /\.css$/,
      use: [
        { loader: 'style-loader'},
        { loader: 'css-loader'},
        {
          loader: 'postcss-loader',
        },
      ]
    },
    {
      test: /\.less$/,
      use: [
        'style-loader', 
        'css-loader', 
        
        'less-loader',
        {
          loader: 'postcss-loader',
        },
        
      ]
    },
    
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      title: "首页",
      inject: 'body',
      // minify:{
      //   removeComments: true,
      //   collapseWhitespace: true,
      // }
    }),

  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 9000
  }

};