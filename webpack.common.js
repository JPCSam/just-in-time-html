const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.bundle.js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				use: ['file-loader', 'extract-loader', 'html-loader'],
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: 'body',
			template: './src/index.html',
			filename: 'index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new HtmlWebpackPlugin({
			template: './src/what-we-do.html',
			filename: './what-we-do.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new HtmlWebpackPlugin({
			template: './src/autoprotect.html',
			filename: './autoprotect.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new CopyPlugin({
			patterns: [{ from: './src/assets', to: './assets' }],
		}),
	],
};
