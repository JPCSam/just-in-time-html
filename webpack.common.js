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
		new HtmlWebpackPlugin({
			template: './src/servicing/suspension/index.html',
			filename: './servicing/suspension/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new HtmlWebpackPlugin({
			template: './src/servicing/exhaust/index.html',
			filename: './servicing/exhaust/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new HtmlWebpackPlugin({
			template: './src/servicing/clutches/index.html',
			filename: './servicing/clutches/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new HtmlWebpackPlugin({
			template: './src/servicing/lighting/index.html',
			filename: './servicing/lighting/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new HtmlWebpackPlugin({
			template: './src/servicing/repairs/index.html',
			filename: './servicing/repairs/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new HtmlWebpackPlugin({
			template: './src/servicing/dpf/index.html',
			filename: './servicing/dpf/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new HtmlWebpackPlugin({
			template: './src/mobile-services/index.html',
			filename: './mobile-services/index.html',
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
