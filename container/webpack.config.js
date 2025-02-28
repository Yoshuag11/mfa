// @ts-check
const HtmlWebpackPlugin = require("html-webpack-plugin");
const port = 8080;

module.exports = {
  mode: "development",
  devServer: {
    port,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
