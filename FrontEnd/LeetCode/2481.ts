// T O(1) S O(1)
function numberOfCuts(n: number): number {
    // 奇数份
    // 偶数份
    if (n <= 1) {
        return 0
    } else {
        if (n % 2 === 0) {
            return n / 2
        } else {
            return n
        }
    }
};

// 位操作 >> 1
// T O(1) S O(1)
function numberOfCuts1(n: number): number {
    return n === 1 ? 0 : (n % 2 ? n : n >> 1)
};