const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3001,
  },
  output: {
    publicPath: "http://localhost:3001/",
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
      name: "app1",
      library: { type: "var", name: "app1" },
      remotes: {
        app2: "app2",
      },
      shared: ["react", "react-dom"].reduce((shared, packageName) => {
        const version = require(packageName).version;
        const key = `${packageName}-${version}`;

        return {
          ...shared,
          [key]: packageName,
        };
      }, {}), // { 'react-16.8.3': 'react', 'react-dom-16.8.3': 'react-dom' }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
