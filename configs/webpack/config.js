const Dev = require("./dev");
const DevBuild = require("./devBuild");
const Prod = require("./prod");

const Config = (env) => {
  switch (env.mode) {
    case "production":
      return Prod(env);

    case "development":
      return DevBuild(env);

    default:
      return Dev(env);
  }
};

module.exports = Config;
