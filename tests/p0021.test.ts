import { ListNode, mergeTwoLists } from "../src/p0021";

describe("Problem 0021", () => {
  test("Example 1", () => {
    const list1 = ListNode.fromArray([1, 2, 4]);
    const list2 = ListNode.fromArray([1, 3, 4]);

    const expected = [1, 1, 2, 3, 4, 4];
    const result = mergeTwoLists(list1, list2);

    let node = result;
    let n = 0;

    while (node !== null) {
      expect(node.val).toBe(expected[n]);
      node = node.next;
      n++;
    }

    expect(n).toBe(expected.length);
  });

  test("Example 2", () => {
    const result = mergeTwoLists(null, null);

    expect(result).toBeNull();
  });

  test("Example 3", () => {
    const result = mergeTwoLists(null, new ListNode(0));

    expect(result).not.toBeNull();
    expect(result!.val).toBe(0);
    expect(result!.next).toBeNull();
  });
});
