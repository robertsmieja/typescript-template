const path = require("path")
const webpack = require("webpack")

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
      },
    ],
  },
  plugins: [new webpack.NoEmitOnErrorsPlugin()],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  target: "node",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
}
