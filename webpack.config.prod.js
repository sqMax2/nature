const {merge} = require('webpack-merge');
const TesserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const common = require('./webpack.config.common.js');


module.exports = merge(common, {
    mode: 'production',
	devtool: 'source-map',
	optimization: {
		minimize: true,
		minimizer: [
			new TesserPlugin(),
			new CssMinimizerPlugin(),
		],
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
				default: false,
				vendors: false
			}
		}
	}
    // add your configuration options here
});
