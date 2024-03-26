// tests/calculateBMI.test.js
const calculateBMI = require("../src/calculateBMI");

describe("calculateBMI", () => {
  it("calculates BMI correctly", () => {
    expect(calculateBMI(70, 1.75)).toBeCloseTo(22.86, 2);
    expect(calculateBMI(80, 1.8)).toBeCloseTo(24.69, 2);
  });

  it("returns null for zero or negative input", () => {
    expect(calculateBMI(0, 1.75)).toBeNull();
    expect(calculateBMI(70, 0)).toBeNull();
    expect(calculateBMI(-70, 1.75)).toBeNull();
    expect(calculateBMI(70, -1.75)).toBeNull();
  });
});
