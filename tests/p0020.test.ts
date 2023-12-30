import { isValid } from "../src/p0020";

describe("Problem 0020", () => {
  test("Example 1", () => {
    const result = isValid("()");

    expect(result).toBe(true);
  });

  test("Example 2", () => {
    const result = isValid("()[]{}");

    expect(result).toBe(true);
  });

  test("Example 3", () => {
    const result = isValid("(]");

    expect(result).toBe(false);
  });
});
