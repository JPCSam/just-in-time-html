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
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
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
			template: './src/what-we-do/index.html',
			filename: './what-we-do/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new HtmlWebpackPlugin({
			template: './src/partners/index.html',
			filename: './partners/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new HtmlWebpackPlugin({
			template: './src/contact-us/index.html',
			filename: './contact-us/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new CopyPlugin({
			patterns: [{ from: './src/assets', to: './assets' }],
		}),
		require('autoprefixer'),
	],
};
