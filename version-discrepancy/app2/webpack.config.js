const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3002,
  },
  output: {
    publicPath: "http://localhost:3002/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app2",
      library: { type: "var", name: "app2" },
      filename: "remoteEntry.js",
      exposes: {
        Button: "./src/Button",
      },
      shared: ["react", "react-dom"].reduce((shared, packageName) => {
        const version = require(packageName).version;
        const key = `${packageName}-${version}`;

        return {
          ...shared,
          [key]: packageName,
        };
      }, {}), // { 'react-16.13.1': 'react', 'react-dom-16.13.1': 'react-dom' }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
