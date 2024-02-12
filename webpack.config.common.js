const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// create base webpack config
module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(jpg|png|svg|gif)$/,
				type: 'asset/resource',
				// use: ['url-loader', 'file-loader'],
			},
			{
				test: /\.[jt]s$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			}
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	}
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html'),
		}),
		new MiniCssExtractPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{ 
					from: path.resolve(__dirname, 'public/assets'),
					to: path.resolve(__dirname, 'dist/assets'),
				},
			],
		}),
	],
};