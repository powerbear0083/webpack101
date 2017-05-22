var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/app.js',
	output: {
		path: '/Users/yinhsun/WorkFile/02_practice/04_webpack101/dist',
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(sass|scss)$/, 
				use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: ['css-loader', 'sass-loader'],
          publicPath: '/dist'
					}
				)
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
		  title: 'Project Demo',
		  // minify: {
		  // 	collapseWhitespace: true
		  // },
		  hash: true,
		  template: './src/index.html'
		}),
		new ExtractTextPlugin({
			filename: 'app.css',
			disable: false,
			allChunks: true
		})
	]
}