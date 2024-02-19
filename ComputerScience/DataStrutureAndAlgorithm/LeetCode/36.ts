// Solution: 多维数组初始化 T O(1) S O(1)
function isValidSudoku(board: string[][]): boolean {
    const rows = new Array(9).fill(0).map(() => new Array(9).fill(0))
    const columns = new Array(9).fill(0).map(() => new Array(9).fill(0))
    const subboxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)))
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const c: any = board[i][j]
            if (c !== '.') {
                const index = c.charCodeAt() - ('0' as any).charCodeAt() - 1
                rows[i][index]++
                columns[j][index]++
                subboxes[Math.floor(i / 3)][Math.floor(j /3)][index]++
                if (rows[i][index] > 1 || columns[j][index] > 1 || subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
                    return false
                } 
            }
        }
    }
    return true
};