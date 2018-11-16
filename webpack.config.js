const webpack = require('webpack');
const path = require('path');
const WebpackMd5Plugin = require('webpack-md5-hash')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

module.exports = {
	entry: {
		main: './src/index.js'
	},

	output: {
		filename: 'js/[name].[chunkhash:8].js',
		chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
	},
	module: {
		rules: [
			{
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',
				test: /\.js$/
			}
		]
	},
	plugins: [
		new BundleAnalyzerPlugin(),
		new WebpackMd5Plugin(),
		new HtmlWebpackPlugin({
			inject: true,
			template: './public/index.html',
			minify: {
			  removeComments: true,
			  collapseWhitespace: true,
			  removeRedundantAttributes: true,
			  useShortDoctype: true,
			  removeEmptyAttributes: true,
			  removeStyleLinkTypeAttributes: true,
			  keepClosingSlash: true,
			  minifyJS: true,
			  minifyCSS: true,
			  minifyURLs: true,
			},
		  }),
	],
	mode: 'production',
	devtool: 'sourcemap',
	optimization: {
		runtimeChunk: true,

		splitChunks: {
			chunks: 'all',
			name: false,
		},
	}
	
};
