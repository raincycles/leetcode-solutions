import { twoSum } from "../src/p0001";

describe("Problem 0001", () => {
  test("Example 1", () => {
    const result = twoSum([2, 7, 11, 15], 9);

    expect(result).toEqual([0, 1]);
  });

  test("Example 2", () => {
    const result = twoSum([3, 2, 4], 6);

    expect(result).toEqual([1, 2]);
  });

  test("Example 3", () => {
    const result = twoSum([3, 3], 6);

    expect(result).toEqual([0, 1]);
  });
});
