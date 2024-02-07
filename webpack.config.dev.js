const path = require('path');
const {merge} = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');

const common = require('./webpack.config.common.js');


module.exports = merge(common, {
    mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		port: 3000,
		open: true,
		hot: true,
		static: path.resolve(__dirname, 'public'),
	},
	plugins: [new ESLintPlugin()],
	// TODO: probably, obsolete code. If so, remove
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.js$/,
	// 			exclude: /node_modules/,
	// 			use: 'eslint-loader',
	// 		}
	// 	]
	// }
});
