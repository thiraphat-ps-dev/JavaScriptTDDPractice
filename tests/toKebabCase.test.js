// tests/toKebabCase.test.js
const toKebabCase = require("../src/toKebabCase");

describe("toKebabCase", () => {
  it("converts strings to kebab case", () => {
    expect(toKebabCase("hello world")).toBe("hello-world");
    expect(toKebabCase("My name is John")).toBe("my-name-is-john");
    expect(toKebabCase("This is a test")).toBe("this-is-a-test");
  });

  it("returns an empty string for an empty input", () => {
    expect(toKebabCase("")).toBe("");
  });
});
