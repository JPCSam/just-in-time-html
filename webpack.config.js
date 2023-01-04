const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	watch: true,
	watchOptions: {
		aggregateTimeout: 200,
		poll: 1000,
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'justintime_build.bundle.js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: 'body',
			template: './src/index.html',
			filename: 'index.html',
		}),
	],
};
