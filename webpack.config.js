var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
   entry: './main.js',
	
   output: {
      path: path.resolve(__dirname,''),
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 9000
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
        {
             test: /\.less$/,
             loader: ExtractTextPlugin.extract({
                   fallbackLoader: 'style-loader',
                   loader: "css-loader!less-loader",
               })
         },
         { test: /\.json$/, loader: 'json-loader' },
        {
           test: /\.css$/,
           use: [ 'style-loader', 'css-loader' ]
         }
      ]
   },
   plugins: [
    new ExtractTextPlugin({filename: "webpage.css",disable: false, allChunks: true})
  ]

}

module.exports = config;
