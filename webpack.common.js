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
			template: './src/servicing/index.html',
			filename: './servicing/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new HtmlWebpackPlugin({
			template: './src/tyres/index.html',
			filename: './tyres/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new HtmlWebpackPlugin({
			template: './src/contact/index.html',
			filename: './contact/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new HtmlWebpackPlugin({
			template: './src/servicing/air-conditioning/index.html',
			filename: './servicing/air-conditioning/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new HtmlWebpackPlugin({
			template: './src/servicing/brakes/index.html',
			filename: './servicing/brakes/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new HtmlWebpackPlugin({
			template: './src/servicing/diagnostics/index.html',
			filename: './servicing/diagnostics/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new HtmlWebpackPlugin({
			template: './src/servicing/batteries/index.html',
			filename: './servicing/batteries/index.html',
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
