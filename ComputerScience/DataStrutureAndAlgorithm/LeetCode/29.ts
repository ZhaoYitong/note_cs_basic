// T O(n) S O(1)
// 常规累加
function divide1(dividend: number, divisor: number): number {
    const positiveDividend = dividend < 0 ? -dividend : dividend
    const positiveDivisor = divisor < 0 ? -divisor : divisor

    let initResult: number = 0
    if (positiveDivisor > positiveDividend || dividend === 0) {
        return 0
    } else if (positiveDividend === positiveDivisor) {
        initResult = 1
    } else if (positiveDivisor === 1) {
        initResult = positiveDividend
    } else {
        let i = 0;
        let initAddon = positiveDivisor
        while (initAddon <= positiveDividend) {
            initAddon += positiveDivisor
            i++;
        }
        initResult = i
    }
    const isDividendPositive = positiveDividend + dividend > 0 ? 1 : -1
    const isDivisorPostive = positiveDivisor + divisor > 0 ? 1 : -1
    const isResultPositive = isDividendPositive + isDivisorPostive === 0 ? false : true

    let newResult = isResultPositive ? initResult : -initResult
    const rightBorder = Math.pow(2, 31) - 1
    const leftBorder = -rightBorder-1
    if (newResult > rightBorder) {
        newResult = rightBorder
    } else if (newResult < leftBorder) {
        newResult = leftBorder
    }
    return newResult
};

// 二分查找除法运算类似于先找到一个可以减去的最大的值，然后再依次根据除数的倍数，逐渐逼近最终的余数
// T O(logn) S O(logn)
function divide2(dividend: number, divisor: number): number {
    const MAX_VALUE = 2 ** 31 - 1, MIN_VALUE = -(2 ** 31);
    // 考虑被除数为最小值的情况
    if (dividend === MIN_VALUE) {
        if (divisor === 1) {
            return MIN_VALUE;
        }
        if (divisor === -1) {
            return MAX_VALUE;
        }
    }
    // 考虑除数为最小值的情况
    if (divisor === MIN_VALUE) {
        return dividend === MIN_VALUE ? 1 : 0;
    }
    // 考虑被除数为 0 的情况
    if (dividend === 0) {
        return 0;
    }

    // 一般情况，使用类二分查找
    // 将所有的正数取相反数，这样就只需要考虑一种情况
    let rev = false;
    if (dividend > 0) {
        dividend = -dividend;
        rev = !rev;
    }
    if (divisor > 0) {
        divisor = -divisor;
        rev = !rev;
    }

    const candidates = [divisor];
    let index = 0;
    // 注意溢出
    while (candidates[index] >= dividend - candidates[index]) {
        candidates.push(candidates[index] + candidates[index]);
        ++index;
    }
    let ans = 0;
    for (let i = candidates.length - 1; i >= 0; --i) {
        if (candidates[i] >= dividend) {
            ans += 1 << i;
            dividend -= candidates[i];
        }
    }

    return rev ? -ans : ans;
};

