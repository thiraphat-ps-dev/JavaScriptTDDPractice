// tests/formatPhoneNumber.test.js
const formatPhoneNumber = require("../src/formatPhoneNumber");

describe("formatPhoneNumber", () => {
  it("formats phone numbers correctly", () => {
    expect(formatPhoneNumber("1234567890")).toBe("123-456-7890");
    expect(formatPhoneNumber("0987654321")).toBe("098-765-4321");
  });

  it("returns an empty string for an empty input", () => {
    expect(formatPhoneNumber("")).toBe("");
  });

  it("returns the original string for a non-numeric input", () => {
    expect(formatPhoneNumber("abc")).toBe("abc");
  });
});
