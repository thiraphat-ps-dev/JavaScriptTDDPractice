// src/toKebabCase.js
function toKebabCase(str) {
  return str.toLowerCase().split(" ").join("-");
}

module.exports = toKebabCase;
