// T O(n) S O(n)
function reverse(x: number): number {
    // 边界值限制，闭区间最大最小值
    let newNumS = ''
    const isPositive = x >= 0
    const xStr = isPositive ? String(x) : String(-x)
    let isFirstValid = false
    for (let i = xStr.length - 1; i >= 0; i--) {
        if (isFirstValid) {
            newNumS += xStr[i]
        } else {
            if (xStr[i]) {
                newNumS += xStr[i]
                isFirstValid = true
            } else {
                continue
            }
        }
    }
    const newNum = Number(newNumS)
    const result = isPositive ? newNum : -newNum
    return result > Math.pow(2, 31) - 1 || result < -Math.pow(2,31) ? 0 : result
};