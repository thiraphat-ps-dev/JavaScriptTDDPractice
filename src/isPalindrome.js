// src/isPalindrome.js
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

module.exports = isPalindrome;
