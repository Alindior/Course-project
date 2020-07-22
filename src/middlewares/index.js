const errors = require("./errors");
const passportInit = require("./passport-init");
const jsonParser = require("./json-parser");

module.exports = [errors, passportInit, jsonParser];
