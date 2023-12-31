export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  static fromArray(arr: number[]): ListNode | null {
    let head: ListNode | null = null;

    for (let i = arr.length - 1; i >= 0; i--) {
      let node = new ListNode(arr[i]);
      node.next = head;
      head = node;
    }

    return head;
  }
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  let node1: ListNode | null = list1;
  let node2: ListNode | null = list2;

  let head: ListNode;
  if (node1.val <= node2.val) {
    head = node1;
    node1 = node1.next;
  } else {
    head = node2;
    node2 = node2.next;
  }

  let tail = head;

  while (node1 !== null && node2 !== null) {
    if (node1.val <= node2.val) {
      tail.next = node1;
      tail = node1;
      node1 = node1.next;
    } else {
      tail.next = node2;
      tail = node2;
      node2 = node2.next;
    }
  }

  while (node1 !== null) {
    tail.next = node1;
    tail = node1;
    node1 = node1.next;
  }

  while (node2 !== null) {
    tail.next = node2;
    tail = node2;
    node2 = node2.next;
  }

  return head;
}
