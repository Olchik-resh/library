const { response } = require("express");

const loggerTwo = (require, response, next) => {
  console.log("log 2");
  next();
};

module.exports = loggerTwo;
