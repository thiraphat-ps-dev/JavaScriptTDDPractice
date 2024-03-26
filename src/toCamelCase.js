// src/toCamelCase.js
function toCamelCase(str) {
  const words = str.toLowerCase().split(" ");
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join("");
}

module.exports = toCamelCase;
