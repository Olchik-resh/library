const { response } = require("express");

const loggerOne = (require, response, next) => {
  console.log("log 1");
  next();
};

module.exports = loggerOne;
