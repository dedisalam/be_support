const path = require("path");

const Output = (env) => {
  switch (env.mode) {
    case "production":
      return {
        filename: "js/[name].min.js",
        path: path.resolve(__dirname, "../../dist"),
        publicPath: "/",
      };

    case "development":
      return {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "../../dist"),
        publicPath: "/",
      };

    default:
      return {
        publicPath: "/",
      };
  }
};

module.exports = Output;
