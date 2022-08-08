const TerserPlugin = require("terser-webpack-plugin");

const Optimization = (env) => {
  switch (env.mode) {
    case "production":
      return {
        splitChunks: {
          chunks: "all",
          minSize: 150000,
          maxSize: 200000,
        },
        minimize: true,
        minimizer: [
          new TerserPlugin({
            minify: TerserPlugin.swcMinify,
            terserOptions: {
              compress: true,
              format: {
                comments: false,
              },
            },
            extractComments: false,
          }),
        ],
      };

    case "development":
      return {
        splitChunks: {
          chunks: "all",
          minSize: 150000,
          maxSize: 200000,
        },
      };

    default:
      return {};
  }
};

module.exports = Optimization;
