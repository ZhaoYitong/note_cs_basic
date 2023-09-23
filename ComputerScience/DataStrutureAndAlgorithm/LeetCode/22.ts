// Solution 1: 生成节点树，再遍历节点树获取所有的路径
// T O(2^n) S O(2^(2n))
class CustomNode {
    val: string
    leftChild: CustomNode | null
    rightChild: CustomNode | null
    leftBracketNum: number
    rightBracketNum: number
    deep: number

    constructor(value: string, leftC: CustomNode | null, rightC: CustomNode | null, leftNum: number, rigthNum: number, depth: number) {
        this.val = value
        this.leftChild = leftC
        this.rightChild = rightC
        this.leftBracketNum = leftNum
        this.rightBracketNum = rigthNum
        this.deep = depth
    }
}

const generateChildNodes = (parentNode: CustomNode, bracketNum: number) => {
    // 最后的叶子节点无后代，最后的叶子节点一定是右括号
    if (parentNode.deep < 2 * bracketNum && parentNode.leftBracketNum >= parentNode.rightBracketNum && parentNode.leftBracketNum <= bracketNum) {
        if (parentNode.leftBracketNum < bracketNum && parentNode.deep < 2 * bracketNum - 1) {
            const newLeftBracketNum = parentNode.leftBracketNum + 1
            const newDeep = parentNode.deep + 1
            const newNode = new CustomNode('(', null, null, newLeftBracketNum, parentNode.rightBracketNum, newDeep)
            generateChildNodes(newNode, bracketNum)
            parentNode.leftChild = newNode
        }

        if (parentNode.rightBracketNum < bracketNum) {
            const newRightBracketNum = parentNode.rightBracketNum + 1
            const newDeep = parentNode.deep + 1
            const newNode = new CustomNode(')', null, null, parentNode.leftBracketNum, newRightBracketNum, newDeep)
            generateChildNodes(newNode, bracketNum)
            parentNode.rightChild = newNode
        }
    }
}

const getLineFromTree = (tree: CustomNode, bracketNum: number) => {
    let results: string[] = []
    const readLines = (treeNodes: CustomNode | null, preStr: string) => {
        if (treeNodes) {
            preStr += treeNodes.val
            if (treeNodes.deep >= 2 * bracketNum) {
                results.push(preStr)
            }
            if (treeNodes.leftChild) {
                readLines(treeNodes.leftChild, preStr)
            }
            if (treeNodes.rightChild) {
                readLines(treeNodes.rightChild, preStr)
            }
        }
    }
    readLines(tree, '')
    return results
}

function generateParenthesis(n: number): string[] {
    let nodeTree = new CustomNode('(', null, null, 1, 0, 1)
    generateChildNodes(nodeTree, n)
    return getLineFromTree(nodeTree, n)
    // 生成一个深度为 2n 的 二叉树（生成过程中可以注意加入检测方法，那么到第三步便不需要过滤）, 输出所有符合括号组合的路径
    // 根节点一定是左括号，叶子节点一定是 右括号
    // 获取所有的边，再遍历过滤即可
};

// Solution 2: 直接递归获取
// 生成子节点，先判断是否继续追加左括号，再判断是否继续追加右括号（只有当左括号的数量 小于 右括号时）
function generateParenthesis1(n: number): string[] {
    const res: string[] = []
    const dfs = (left: number, right: number, str: string) => {
        if (str.length === 2 * n) {
            res.push(str)
            return
        }
        if (left > 0) {
            dfs(left - 1, right, str + '(')
        }
        if (left < right) {
            dfs(left, right - 1, str + ')')
        }
    }
    dfs(n, n, '')
    return res
};