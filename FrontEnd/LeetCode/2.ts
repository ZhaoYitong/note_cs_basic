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
        this.val = (val === undefined ? 0 : val);
        this.next
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // 6342 + 465 = 6807
    // 2 -> 4 -> 3 -> 6
    // 5 -> 6 -> 4
    // 7 -> 0 -> 8 -> 6

    // 遍历短链表，多余部分再单独加
    // 注意进位
    const lenL1 = calListLength(l1)
    const lenL2 = calListLength(l2)
    const shortestLen = Math.min(lenL1, lenL2)
    let addonList: ListNode | null = new ListNode()
    for (let i = 0; i < shortestLen; i++) {
        // addonList.val = currentVal;
        // addonList.next = 
    }

    return null
};

const calListLength = (list: ListNode | null) => {
    let count = 0;
    let newList = list;
    while (newList?.val) {
        count++;
        newList = newList.next
    }
    return count
}

const findNodeByIndex = (list: ListNode | null, idx: number) => {
    let count = 0;
    let resultNode = list
    if (list) {
        while (count < idx) {
            resultNode = list.next;
            count++;
        }
    }
    return resultNode
}

// TODO:
const getNextAddons = (
    currentList: ListNode | null,
    preAddonNum: number,
    addon1: ListNode | null,
    addon2: ListNode | null
) => {
    let newList = currentList
    if (newList) {
        while (newList?.next) {
            newList = newList.next
        }
        const { nextAddon, currentVal } = calNodeValAddon(addon1, addon2, preAddonNum)
        newList.val = currentVal
        newList.next = null
        return {
            newList,
            nextAddon
        }
    } else {
        return {
            newList: null,
            nextAddon: 0
        }
    }
}

const calNodeValAddon = (node1: ListNode | null, node2: ListNode | null, append: number) => {
    const num1 = node1?.val || 0;
    const num2 = node2?.val || 0;
    const sum = num1 + num2 + append;
    const nextAddon = sum >= 10 ? 1 : 0;
    const currentVal = sum % 10;
    return {
        nextAddon,
        currentVal
    }
}

