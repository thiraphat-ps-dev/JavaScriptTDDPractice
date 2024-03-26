// tests/calculatePercentage.test.js
const calculatePercentage = require("../src/calculatePercentage");

describe("calculatePercentage", () => {
  it("calculates percentage correctly", () => {
    expect(calculatePercentage(50, 200)).toBe(25);
    expect(calculatePercentage(1, 3)).toBeCloseTo(33.33, 2);
  });

  it("returns null for zero or negative total", () => {
    expect(calculatePercentage(50, 0)).toBeNull();
    expect(calculatePercentage(50, -200)).toBeNull();
  });

  it("returns 0 for zero part", () => {
    expect(calculatePercentage(0, 200)).toBe(0);
  });
});
