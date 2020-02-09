const { generateText } = require("./util");

test("should output name and age", () => {
  const text = generateText("Max", 40);
  expect(text).toBe("Max (40 years old)");
});

test("should output data-less text", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});
