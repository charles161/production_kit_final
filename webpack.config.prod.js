import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMD5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main:path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'//name a placehilder for vendor or main defined in the entruy point
  },
  plugins: [
    //generate an external css file with an hash in the filename
    new ExtractTextPlugin('[name].[contenthash].css'),
    //using md5 hash for cache busting
    new WebpackMD5Hash(),
    //use commons chunk plugin to create a separate bundle of vendor js to cache separately
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor'
    }),

    new HtmlWebpackPlugin({
      template:'src/index.html',
      minify: {
        removeComments:true,
        collapseWhitespace:true,
        removeRedundantAttributes:true,
        useShortDoctype:true,
        removeEmptyAttributes:true,
        removeStyleLinkTypeAttributes:true,
        keepClosingSlash:true,
        minifyCSS:true,
        minifyJS:true,
        minifyURLs:true
      },
      inject:true
    }),//create html file that includes eference to bundled javasript
    new webpack.optimize.DedupePlugin(),//eliminate duplicate packages
    new webpack.optimize.UglifyJsPlugin()//minify js
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.css$/, loader:ExtractTextPlugin.extract('css?sourceMap') }
    ]
  }
}
