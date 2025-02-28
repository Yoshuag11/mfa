// @ts-check
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const port = 8081;

module.exports = {
  mode: "development",
  devServer: {
    port,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      exposes: {
        "./ProductsIndex": "./src/index",
      },
      filename: "remoteEntry.js",
      name: "products",
    }),
  ],
};
