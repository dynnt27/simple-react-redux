const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require('webpack')

 
module.exports = {
  cache: true,
  devtool: 'eval-sourcemap',
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:[ 'es2015', 'react', 'stage-2' ]
        }
      },
      {
        test: /\.scss$/, 
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader','sass-loader'],
            publicPath: '/dist'
        })
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  // optimization
  plugins: [
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin(),//Merge chunks 
    new ExtractTextPlugin({
          filename: 'style.css',
          disable: false,
          allChunks: true
      }) // for sass
  ]
}