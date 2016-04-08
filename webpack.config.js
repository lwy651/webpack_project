var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry:[
		'./app/index.jsx'
	],
	output:{
		path: __dirname + '/build/',
		publicPath: 'build',
		filename: 'bundle.js'
	},
	module:{
		loaders:[
			// { test: /\.js?$/, loaders: ['jsx?harmony'] }
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: "babel",query: {presets:['es2015','react']}},
			// { test: /\.css?$/, loader: "style!css" }
			{
                test: /\.css?$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
		]
	},
	plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};
console.log("ok");