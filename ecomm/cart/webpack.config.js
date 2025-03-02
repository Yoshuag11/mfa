// @ts-check
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const port = 8082;

module.exports = {
  devServer: {
    port,
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new ModuleFederationPlugin({
      exposes: {
        "./CartShow": "./src/index", // relative or absolute paths must be used
      },
      filename: "remoteEntry.js",
      name: "cart",
      shared: ["@faker-js/faker"],
      // shared: {
      //   "@faker-js/faker": {
      //     singleton: true,
      //   },
      // },
    }),
  ],
};
