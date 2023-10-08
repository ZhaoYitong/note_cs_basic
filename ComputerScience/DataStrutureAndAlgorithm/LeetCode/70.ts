// Solution 1 裴波纳列数
function climbStairs(n: number): number {
    if (n === 1) {
        return 1
    }
    let dp: number[] = []
    dp[0] = 1
    dp[1] = 2
    for (let i=3; i<=n; i++) {
        dp[i-1] = dp[i-2] + dp[i-3]
    }
    return dp[n-1]
};

function climbStairs1(n: number): number {
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    let first = 1
    let second = 2
    let third = 0
    for (let i=3; i<=n; i++) {
        third = first + second
        first = second
        second = third
    }
    return third
};

function climbStairs2(n: number): number {
    let p = 0, q = 0, r = 1;
    for (let i = 1; i <= n; ++i) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};
