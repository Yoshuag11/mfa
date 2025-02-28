// @ts-check
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
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
    new ModuleFederationPlugin({
      remotes: {
        products: "products@http://localhost:8081/remoteEntry.js",
      },
    }),
  ],
};
