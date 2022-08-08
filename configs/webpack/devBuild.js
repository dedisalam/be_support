const Entry = require("./entry");
const Module = require("./module");
const Optimization = require("./optimization");
const Output = require("./output");
const Plugins = require("./plugins");
const Resolve = require("./resolve");

const Config = (env) => {
  return {
    devtool: "eval-source-map",
    entry: Entry,
    mode: env.mode,
    module: Module,
    optimization: Optimization(env),
    output: Output(env),
    plugins: Plugins(env),
    resolve: Resolve(),
  };
};

module.exports = Config;
