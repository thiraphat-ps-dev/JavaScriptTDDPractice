// tests/transFormPhoneNumber.test.js
const transFormPhoneNumber = require("../src/transFormPhoneNumber");

describe("transFormPhoneNumber", () => {
  it("formats phone numbers correctly", () => {
    expect(transFormPhoneNumber("0885547788")).toBe("(+66)88 554 7788");
    expect(transFormPhoneNumber("0987654321")).toBe("(+66)98 765 4321");
  });

  it("returns an empty string for an empty input", () => {
    expect(transFormPhoneNumber("")).toBe("");
  });

  it("returns the original string for a non-numeric input", () => {
    expect(transFormPhoneNumber("abc")).toBe("abc");
  });
});
