const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, ".", "dist"),
    clean: true,
    publicPath: "/",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, ".", "dist"),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
    host: "localhost",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
