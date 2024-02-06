// Solution1: 两层遍历 O(n*n)
function maxProfit(prices: number[]): number {
    const L = prices.length
    if (L <= 1) {
        return 0
    } else {
        let i = L - 2
        let j = L - 1
        let e = 0
        let tmpSell = 0
        while (j >= 1) {
            // 已知股票无负数，那么卖价即决定了可能的最高收益
            // 前一次售卖的价格一定比后续的售卖价格小，否则利润不会增加
            if (e < prices[j] && tmpSell < prices[j]) {
                while (i >= 0) {
                    const newE = prices[j] - prices[i] >= 0 ? prices[j] - prices[i] : 0
                    e = e > newE ? e : newE
                    tmpSell = prices[j]
                    i--
                }
            }
            j--
            i=j-1

        }
        return e
    }
};

// Solution2: 一层遍历
function maxProfit1(prices: number[]): number {
    let c: number = 10001 // 0 <= prices[i] <= 10*10*10*10
    let p: number = 0
    // 直接遍历，既兼容了t+0又兼容了t+1
    prices.forEach(i => {
        c = c < i ? c : i
        p = p > i - c ? p : i - c
    })
    return p
};