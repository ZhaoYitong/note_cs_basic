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
// Solution 1: while loop
// T O(m+n) S(m+n)
const appendNext = (list: ListNode | null, newNode: ListNode, idx: number) => {
    if (list) {
        if (idx === 0) {
            list.val = newNode.val
            list.next = newNode.next
        } else {
            while (list.next) {
                list = list.next
            }
            list.next = newNode
        }
    }
}

const getTotalLen = (list1: ListNode | null, list2: ListNode | null) => {
    let cnt = 0;
    while (list1) {
        cnt++
        list1 = list1.next
    }
    while (list2) {
        cnt++
        list2 = list2.next
    }
    return cnt
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const totalCnt = getTotalLen(list1, list2)
    let i = 0;
    if (totalCnt === 0) {
        return null
    } else {
        let result: ListNode | null = new ListNode()
        while (i < totalCnt) {
            let val: any;
            if (list1 && list2) {
                if (list1.val <= list2.val) {
                    val = list1.val
                    list1 = list1.next
                } else {
                    val = list2.val
                    list2 = list2.next
                }
            } else {
                if (!list1 && list2) {
                    // 已知两个链表都是升序
                    appendNext(result, list2, i)
                    return result
                } else if (list1 && !list2) {
                    appendNext(result, list1, i)
                    return result
                }
            }

            const newNode = new ListNode(val, null)
            appendNext(result, newNode, i)
            i++
        }
        return result
    }
};

// Solution 2: recursion, 关键是两个单向链表的递归合并
// T O(m+n) S(m+n)
function mergeTwoLists1(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2
    if (!list2) return list1
    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists1(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists1(list1, list2.next)
        return list2
    }
};
