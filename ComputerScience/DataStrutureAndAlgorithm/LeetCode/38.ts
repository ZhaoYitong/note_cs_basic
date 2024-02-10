// Solution1: 遍历、递补、替换 T O(N x M) S O(M)
function countAndSay(n: number): string {
    if (n <= 1) {
        return '1'
    } else {
        let lastResult = '1'
        for (let i = 2; i <= n; i++) {
            let currentNum = {
                num: lastResult[0],
                count: 1
            }
            let newResult = ''
            for (let j = 1; j < lastResult.length; j++) {
                if (currentNum.num === lastResult[j]) {
                    currentNum.count++
                } else {
                    // 出现不一样的字符，则需要把之前的字符并入结果中
                    newResult = newResult + String(currentNum.count) + currentNum.num
                    currentNum.num = lastResult[j]
                    currentNum.count = 1
                }
            }
            // 最后一批字符的记录也要并入到结果中
            newResult = newResult + String(currentNum.count) + currentNum.num
            lastResult = newResult
        }
        return lastResult
    }
};

// Solution2: 原理同上
function countAndSay1(n: number): string {
    let str = '1'
    for (let i = 2; i <= n; i++) {
        let list: string[] = []
        let start = 0
        let pos = 0

        while (pos < str.length) {
            while (pos < str.length && str[pos] === str[start]) {
                pos++
            }
            const tmp = '' + (pos - start) + str[start]
            list.push(tmp)
            start = pos
        }
        str = list.join('')
    }
    return str
};