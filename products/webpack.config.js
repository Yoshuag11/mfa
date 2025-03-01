// @ts-check
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const port = 8081;

module.exports = {
  devServer: {
    port,
  },
  mode: "development",
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
      shared: ["@faker-js/faker"],
      // shared: {
      //   "@faker-js/faker": {
      //     singleton: true,
      //   },
      // },
    }),
  ],
};
