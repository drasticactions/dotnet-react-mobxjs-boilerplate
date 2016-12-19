var path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.join(__dirname, 'node_modules');
module.exports = {
	context: path.join(__dirname, 'wwwroot'),
	entry: {
		server: './server',
		client: './client'
	},
	output: {
		path: path.join(__dirname, 'wwwroot/build'),
		filename: '[name].bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin({
			'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		}),
	],
	tslint: {
		// Rules are in tslint.json
		emitErrors: true, // false = WARNING for webpack, true = ERROR for webpack
		formattersDirectory: path.join(nodeModulesPath, 'tslint-loader', 'formatters')
	},
	module: {
		preLoaders: [
			{ test: /\.ts(x?)$/, loader: "tslint", include: path.resolve(__dirname, "src") },
		],
		loaders: [
			{ test: /\.tsx?$/, loaders: ['ts-loader'], include: path.join(__dirname, 'app') }
		],
	},
	ts: {
		compilerOptions: {
			jsx: "react"
		}
	},
	resolve: {
		extensions: ['', '.js', '.ts', '.tsx']
	}
};