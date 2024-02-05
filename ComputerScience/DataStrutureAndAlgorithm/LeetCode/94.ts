/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// @ts-ignore
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

// 理解中序遍历的含义 + 递归的含义
function inorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = []
    const midOrderTranverse = (node: TreeNode | null, list: number[]) => {
        if (node) {
            if (node.left) {
                midOrderTranverse(node.left, result)
            }
            list.push(node.val)
            if (node.right) {
                midOrderTranverse(node.right, result)
            }
        }
    }
    midOrderTranverse(root, result)
    return result
};


function inorderTraversal1(root: TreeNode | null): number[] {
    let WHITE: number = 0
    let GRAY: number = 1
    // 根一定存在
    let stack: {
        node: TreeNode | null
        color: number
    }[] = [{
        node: root,
        color: WHITE
    }]
    let res: number[] = []
    while (stack.length) {
        // @ts-ignore
        const { node, color } = stack.pop()
        if (node === null) {
            continue
        } else {
            // 入栈顺序，右 中 左
            if (color === WHITE) {
                if (node.right) {
                    stack.push({
                        node: node.right,
                        color: WHITE
                    })
                }
                // 当前节点由于已入栈过，这里再次入栈
                stack.push({
                    node,
                    color: GRAY
                })
                if (node.left) {
                    stack.push({
                        node: node.left,
                        color: WHITE
                    })
                }
            } else {
                res.push(node.val)
            }
        }
    }
    return res
};