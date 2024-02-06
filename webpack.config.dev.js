const {merge} = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');

const common = require('./webpack.config.common.js');


module.exports = merge(common, {
    mode: 'development',
	devServer: {
		port: 3000,
		open: true,
		hot: true
	},
	plugins: [new ESLintPlugin(options)],
	rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: 'eslint-loader',
		}
	]
});
