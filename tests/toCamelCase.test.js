// tests/toCamelCase.test.js
const toCamelCase = require("../src/toCamelCase");

describe("toCamelCase", () => {
  it("converts strings to camel case", () => {
    expect(toCamelCase("hello world")).toBe("helloWorld");
    expect(toCamelCase("My name is John")).toBe("myNameIsJohn");
    expect(toCamelCase("This is a test")).toBe("thisIsATest");
  });

  it("returns an empty string for an empty input", () => {
    expect(toCamelCase("")).toBe("");
  });
});
