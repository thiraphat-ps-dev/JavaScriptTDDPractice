// tests/findSecondMax.test.js
const findSecondMax = require("../src/findSecondMax");

describe("findSecondMax", () => {
  it("returns the second maximum number in an array", () => {
    expect(findSecondMax([1, 2, 3, 4, 5])).toBe(4);
    expect(findSecondMax([-1, -2, -3, -4, -5])).toBe(-2);
    expect(findSecondMax([7, 2, 9, 10])).toBe(9);
  });

  it("returns undefined for an array with less than 2 elements", () => {
    expect(findSecondMax([1])).toBeUndefined();
    expect(findSecondMax([])).toBeUndefined();
  });
});
