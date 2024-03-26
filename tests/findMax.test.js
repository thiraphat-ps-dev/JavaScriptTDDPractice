// tests/findMax.test.js
const findMax = require("../src/findMax");

describe("findMax", () => {
  it("returns the maximum number in an array", () => {
    expect(findMax([1, 2, 3, 4, 5])).toBe(5);
    expect(findMax([-1, -2, -3, -4, -5])).toBe(-1);
    expect(findMax([7, 2, 9, 10])).toBe(10);
  });

  it("returns undefined for an empty array", () => {
    expect(findMax([])).toBeUndefined();
  });
});
