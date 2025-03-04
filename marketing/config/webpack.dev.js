// @ts-check
const { merge } = require("webpack-merge");
// module "/Users/hectorgamerosmorua/Library/Caches/typescript/5.7/node_modules/@types/html-webpack-plugin/index"
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");
const port = 8081;
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
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      exposes: {
        "./App": "./src/App",
        "./MarketingApp": "./src/bootstrap",
      },
      filename: "remoteEntry.js",
      name: "Marketing",
      // shared: ["react", "react-dom"],
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, config);
