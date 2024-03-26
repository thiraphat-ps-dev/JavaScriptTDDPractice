// tests/calculateGPA.test.js
const calculateGPA = require("../src/calculateGPA");

describe("calculateGPA", () => {
  it("calculates GPA correctly", () => {
    expect(calculateGPA([4, 3, 2, 1], [3, 2, 1, 1])).toBeCloseTo(3, 2);
  });

  it("returns null for empty input", () => {
    expect(calculateGPA([], [])).toBeNull();
  });

  it("returns null for mismatched input lengths", () => {
    expect(calculateGPA([4, 3, 2, 1], [1, 1, 1])).toBeNull();
  });
});
