const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const path = require("path");
const bootstrapEntryPoints = require('./webpack.bootstrap.config.js'); 
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');


const isProd = process.env.NODE_ENV === 'production'; // true or false
const cssDev = ['style-loader','css-loader?sourceMap', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
	fallback: 'style-loader',
	loader: ['css-loader','sass-loader'],
	publicPath: '/dist'
});
const cssConfig = isProd ? cssProd : cssDev;

const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

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
			},
			{ test: /\.(woff2?|svg)$/, use: 'url-loader?limit=10000&name=fonts/[name].[ext]' },
			{ test: /\.(ttf|eot)$/, use: 'file-loader?name=fonts/[name].[ext]' },
			// Bootstrap 3
    		{ test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, use: 'imports-loader?jQuery=jquery' }
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
			filename: '/css/[name].css',
			disable: !isProd,
			allChunks: true
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		// Make sure this is after ExtractTextPlugin!
	    new PurifyCSSPlugin({
	      // Give paths to parse for rules. These should be absolute!
	      paths: glob.sync(path.join(__dirname, 'src/*.html')),
	    })
	]
}