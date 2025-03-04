// @ts-check
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");
const config = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      exposes: {
        "./App": "./src/App",
        "./MarketingApp": "./src/bootstrap",
      },
      filename: "remoteEntry.js",
      name: "Marketing",
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, config);
