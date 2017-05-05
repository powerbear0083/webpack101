var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require("path");
var bootstrapEntryPoints = require('./webpack.bootstrap.config.js'); 

var isProd = process.env.NODE_ENV === 'production'; // true or false
var cssDev = ['style-loader','css-loader', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
	fallback: 'style-loader',
	loader: ['css-loader','sass-loader'],
	publicPath: '/dist'
});
var cssConfig = isProd ? cssProd : cssDev;

var bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

module.exports = {
	entry: {
		app: './src/app.js',
		contact: './src/contact.js',
		bootstrap: bootstrapConfig
	},
	output: {
		// path: '/Users/eu-team/eu-work/self-practice/08_webpack101/dist',
		path: path.resolve(__dirname, "dist"),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(sass|scss)$/, 
				use: cssConfig
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.pug$/,
        		use: ['html-loader', 'pug-html-loader']
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
        		use: [
        			// 'file-loader?name=[name].[hash:6].[ext]&outputPath=img/&publicPath=',
        			'file-loader?name=img/[name].[hash:6].[ext]',
        			'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        		]
			}
		]
	},
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        port: 9000,
        stats: 'errors-only',
        open: true
    },
	plugins: [
		new HtmlWebpackPlugin({
		  title: 'Project Demo',
		  // minify: {
		  // 	collapseWhitespace: true
		  // },
		  hash: true,
		  excludeChunks: ['contact'],
		  template: './src/index.pug'
		}),
		new HtmlWebpackPlugin({
		  title: 'Contact Page',
		  // minify: {
		  // 	collapseWhitespace: true
		  // },
		  hash: true,
		  chunks: ['contact'],
		  filename: 'contact.html',
		  template: './src/contact.html'
		}),
		new ExtractTextPlugin({
			filename: 'app.css',
			disable: !isProd,
			allChunks: true
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
}