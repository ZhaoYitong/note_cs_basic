// Solution: T O(m*n) S O(1)
function minPathSum(grid: number[][]): number {
    // 关键是理解每次只能向右/向下，走到某个点意味着这个点之前的值一定要更小
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (i + j === 0) {
                continue
            } else if (i === 0) {
                grid[i][j] = grid[i][j-1] + grid[i][j]
            } else if (j === 0) {
                grid[i][j] = grid[i-1][j] + grid[i][j]
            } else {
                grid[i][j] = Math.min(grid[i-1][j], grid[i][j-1]) + grid[i][j]
            }
        }
    }
    return grid[grid.length - 1][grid[0].length - 1]
};