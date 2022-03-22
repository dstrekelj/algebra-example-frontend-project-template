const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const inputPath = path.join(__dirname, "src", "index.js");
const outputPath = path.join(__dirname, "build");
const publicPath = path.join(__dirname, "public");

module.exports = {
  entry: inputPath,
  output: {
    path: outputPath,
    filename: "[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(publicPath, "index.html"),
    }),
  ],
  devServer: {
    port: 9000,
  },
};
