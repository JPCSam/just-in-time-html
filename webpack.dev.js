const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	// watch: true,
	watchOptions: {
		aggregateTimeout: 200,
		poll: 1000,
	},
	target: 'web',
	devtool: 'eval-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, '/dist'),
		},
		liveReload: true,
		magicHtml: true,
		watchFiles: ['src/*'],
	},
});
