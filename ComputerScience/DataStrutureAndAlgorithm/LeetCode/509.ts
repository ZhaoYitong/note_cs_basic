// 存在重叠子问题和最优子结构，可以考虑动态规划处理

// Solution1: 递归 O(2^n) S(n)
function fib(n: number): number {
    if (n <= 1) return n
    return fib(n - 1) + fib(n - 2)
};

// Solution2: 遍历 O(n) S(1)
function fib1(n: number): number {
    // f(n) = f(n-1) + f(n-2)

    // f(2) = f(1) + f(0) = 1 + 0 = 1

    // f(3) = f(2) + f(1) = 1 + 1 =2
    // f(3) = f(1) + f(0) + f(1)
    // f(4) = f(3) + f(2) = 2 + 1 = 3
    if (n < 2) return n
    let p = 0
    let q = 0
    let r = 1
    for (let c = 2; c <= n; c++) {
        // 0 0 1
        // 0 1 1
        // 1 1 2
        // 1 2 3
        p = q
        q = r
        r = p + q
    }
    return r
};