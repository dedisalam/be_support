const { resolve } = require("path");

const Resolve = () => {
  const Alias = {
    "@config": resolve(__dirname, "../../src/config"),
    "@controllers": resolve(__dirname, "../../src/controllers"),
    "@databases": resolve(__dirname, "../../src/databases"),
    "@dtos": resolve(__dirname, "../../src/dtos"),
    "@exceptions": resolve(__dirname, "../../src/exceptions"),
    "@interfaces": resolve(__dirname, "../../src/interfaces"),
    "@middlewares": resolve(__dirname, "../../src/middlewares"),
    "@models": resolve(__dirname, "../../src/models"),
    "@routes": resolve(__dirname, "../../src/routes"),
    "@services": resolve(__dirname, "../../src/services"),
    "@utils": resolve(__dirname, "../../src/utils"),
  };
  const Extensions = [".js", ".ts", ".json"];

  return {
    alias: Alias,
    extensions: Extensions,
  };
};

module.exports = Resolve;
