// Solution1: T O(x) S O(y)
function isHappy(n: number): boolean {
    const pingfang = {
        1: 1,
        2: 4,
        3: 9,
        4: 16,
        5: 25,
        6: 36,
        7: 49,
        8: 64,
        9: 81
    }
    // 记录以避免无限循环
    let tmpResultMap = {

    }
    let nStr: String = String(n)
    while (true) {
        let newResult = 0
        for (let i = 0; i < nStr.length; i++) {
            newResult += nStr[i] === '0' ? 0 : pingfang[Number(nStr[i])]
        }
        if (newResult === 1) {
            return true
        } else {
            if (!tmpResultMap[newResult]) {
                tmpResultMap[newResult] = newResult
                nStr = String(newResult)
            } else {
                // 进入无限循环
                return false
            }
        }
    }
};

// Solution2: 快慢指针 T O(x) S O(1)
function isHappy1(n: number): boolean {
    const getSquareSum = (m: number) => {
        let sum: number = 0
        while (m > 0) {
            let bit = m % 10
            sum += bit * bit
            m = Math.floor(m / 10)
        }
        return sum
    }

    let slow = n
    let fast = n
    while (true) {
        slow = getSquareSum(slow)
        fast = getSquareSum(fast)
        fast = getSquareSum(fast)
        if (slow === 1 || fast === 1) {
            return true
        } else if (slow === fast) {
            return false
        } else {
            continue
        }
    }
};