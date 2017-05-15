var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var webpack = require('webpack');
var extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname ,  'dist')
  },
  module: {
    rules: [
      {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        query: {
              presets: ['es2015', 'react']
           },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: extractPlugin.extract({
          use:['css-loader','sass-loader']
        })
      },
      {
                  test: /\.(jpe?g|png|gif|svg)$/i,
                  use: [
                         {
                           loader: 'file-loader',
                           options: {
                               name:'[name].[ext]',
                               outputPath: 'img/'
                           }
                         }]

              }
    ]
  },
  plugins: [
    extractPlugin,
     new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin(),//Merge chunks 
     new CompressionPlugin({ 
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })

  ],
devtool: 'cheap-module-eval-source-map'
}
