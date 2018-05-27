module.exports = {
	entry: "./src/index.jsx",
	output: {
		path: `${__dirname}/dist/`,
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				loader: "babel-loader",
				include: /src/,
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
