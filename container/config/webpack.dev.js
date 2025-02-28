// @ts-check
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
const port = 8080;
const config = {
  devServer: {
    historyApiFallback: {
      index: "index.html",
    },
    port,
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new ModuleFederationPlugin({
      remotes: {
        Marketing: "Marketing@http://localhost:8081/remoteEntry.js",
      },
      // shared: ["react", "react-dom"],
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, config);
