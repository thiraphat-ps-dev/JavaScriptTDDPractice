// tests/addTwo.test.js
const addTwo = require("../src/addTwo");

describe("addTwo", () => {
  it("adds two to the input number", () => {
    expect(addTwo(3)).toBe(5);
    expect(addTwo(-1)).toBe(1);
  });

  it("adds two to zero", () => {
    expect(addTwo(0)).toBe(2);
  });

  it("adds two to a positive number", () => {
    expect(addTwo(10)).toBe(12);
  });

  it("adds two to a negative number", () => {
    expect(addTwo(-5)).toBe(-3);
  });
});