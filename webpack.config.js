module.exports = {
	mode: "production",
	entry: "./src/index.jsx",
	output: {
		path: `${__dirname}/dist/`,
		filename: "[name].bundle.js",
	},
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./",
		proxy: {
			"/api": "http://localhost:4000",
			"/user": "http://localhost:4000",
		},
	},
	module: {
		rules: [
			{
				loader: "babel-loader",
				include: /src/,
				exclude: /node_modules/,
				options: {
					presets: ["env", "react"],
				},
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
};
