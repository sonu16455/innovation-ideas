const path = require("path")
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
<<<<<<< HEAD
	entry: "./src/js/index.js",
=======
	entry: "./src/js/index.jsx",
>>>>>>> dev
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg|jpeg|jpg)$/,
				loader: "url-loader?limit=100000"
			}
<<<<<<< HEAD

=======
>>>>>>> dev
		]
	},
	devServer: {
		port: 8000,
		historyApiFallback: true
	},
	plugins: [new CleanWebpackPlugin("./dist")]
}
