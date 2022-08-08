const webpack = require("webpack");
const DEV_ENV = require("../environment/development");
const PROD_ENV = require("../environment/production");

const Plugins = (env) => {
  switch (env.mode) {
    case "production":
      return [
        new webpack.DefinePlugin({
          "process.env": PROD_ENV,
        }),
      ];

    case "development":
      return [
        new webpack.DefinePlugin({
          "process.env": JSON.stringify(DEV_ENV),
        }),
      ];

    default:
      return [
        new webpack.DefinePlugin({
          "process.env": JSON.stringify(DEV_ENV),
        }),
      ];
  }
};

module.exports = Plugins;
