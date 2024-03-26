// tests/isPalindrome.test.js
const isPalindrome = require("../src/isPalindrome");

describe("isPalindrome", () => {
  it("returns true for palindromes", () => {
    expect(isPalindrome("radar")).toBe(true);
    expect(isPalindrome("level")).toBe(true);
  });

  it("returns false for non-palindromes", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
  });
});
