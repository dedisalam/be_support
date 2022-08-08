const Module = {
  rules: [
    {
      test: [/\.js?$/, /\.ts?$/],
      use: ["babel-loader"],
    },
  ],
};

module.exports = Module;
