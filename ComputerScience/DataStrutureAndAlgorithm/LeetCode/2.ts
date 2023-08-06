/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// 链表，递归生成，大数限制
function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode | null {
    let result = new ListNode()
    gNode(l1, l2, result, 0)
    return result
};

const gNode = (list1: ListNode | null, list2: ListNode | null, item: ListNode, valAddon: number) => {
    let newVal = item.val + valAddon
    let newNext1: ListNode | null = null
    let newNext2: ListNode | null = null
    if (list1) {
        newVal = list1.val + newVal
        newNext1 = list1.next
    }
    if (list2) {
        newVal = list2.val + newVal
        newNext2 = list2.next
    }
    const nodeVal = newVal % 10
    const nextAddon = newVal >= 10 ? 1 : 0
    item.val = nodeVal
    const nextNode = new ListNode()

    if (newNext1 || newNext2 || nextAddon) {
        item.next = nextNode
        gNode(newNext1, newNext2, nextNode, nextAddon)
    }
}

// solution 2
var addTwoNumbers2 = function (l1, l2) {
    const preHead = new ListNode();
    let cur = preHead;
    let carry = 0;
    while (l1 || l2) {
      const val1 = l1 ? l1.val : 0;
      const val2 = l2 ? l2.val : 0;
      const sum = val1 + val2 + carry;
  
      cur.next = new ListNode(sum % 10);
      cur = cur.next;
  
      carry = Math.floor(sum / 10);
      
      if (l1) {
        l1 = l1.next;
      }
      if (l2) {
        l2 = l2.next;
      }
    }
    if (carry > 0) {
      cur.next = new ListNode(carry);
    }
    return preHead.next;
  };
