const path = require("path");

const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
	return {
		entry: "./src/index.tsx",
		output: {
			filename: "bundle.[fullhash].js",
			path: path.resolve(__dirname, "dist"),
			publicPath: '/',
		},
		plugins: [
			new CleanWebpackPlugin(),
			new MiniCssExtractPlugin({
				filename: "[name].[contenthash].css",
				chunkFilename: "[id].[contenthash].css"
			}),
			new CopyWebpackPlugin({
				patterns: [
					{
						from: path.resolve("./src", "Assets"),
						to: 'assets',
						globOptions: {
							ignore: ['*.DS_Store'],
						},
					},
				],
			}),
			new HtmlWebpackPlugin({
				template: "./public/index.html",
			}),
		],
		resolve: {
			modules: ["src", "node_modules"],
			extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
		},
		module: {
			rules: [
				{
					test: /\.(t|j)sx?$/,
					exclude: /node_modules/,
					loader: require.resolve("babel-loader"),
				},
				{
					test: /\.(c|sc|sa)ss$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader',
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									ident: 'postcss',
									plugins: [autoprefixer, tailwindcss],
								},
							},
						},
					],
				},
				{
					test: /\.svg$/,
					use: ['@svgr/webpack'],
				},
				// Images: Copy image files to build folder
				{
					test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
					type: 'asset/resource',
					use: [
						{
							loader: 'image-process-loader',
							options: {
								presets: {
									xlblur: {
										blur: 50,
									},
									optimized: {
										jpeg: {
											progressive: true,
											quality: 80
										},
									}
								}
							}
						}
					]
				},
				// Fonts and SVGs: Inline files
				{
					test: /\.(woff(2)?|eot|ttf|otf|)$/,
					type: 'asset/inline'
				},
			],
		},
		devServer: {
			hot: true,
			static: path.resolve(__dirname, "dist"),
			open: true,
			historyApiFallback: true,
		}
	}
};