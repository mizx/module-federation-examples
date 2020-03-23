const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  webpack: config => {
    config.plugins.push(
      new ModuleFederationPlugin({
        name: "nextapp",
        library: { type: "var", name: "nextapp" },
        remotes: {
          app2: "app2"
        },
        shared: ["react", "react-dom"]
      })
    );

    return config;
  }
};
