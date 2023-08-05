function myAtoi(s: string): number {
    // 考虑正则替换 ?
    // 预处理
    //      删除英文字母，' '、'+'、'-' 和 '.'

    let idx = 0;
    let numStr = ''
    let findNumber = false
    let findNegetive = false
    let findPositive = false
    const numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    while (idx < s.length) {
        const currentStr = s[idx]
        if (numberArr.includes(currentStr)) {
            findNumber = true
            numStr += currentStr
        } else if (currentStr === '+') {
            if (findPositive) {
                continue
            } else {
                findPositive = true
            }
        } else if (currentStr === '-') {
            if (findNegetive) {
                continue
            } else {
                if (findNumber) {
                    continue
                } else {
                    numStr += currentStr
                    findNegetive = true
                }
            }
        }
        idx++
    }
    
    let num = Number(numStr)
    const min = Math.pow(-2,31)
    const max = Math.pow(2,31) - 1
    if (num < min) {
        num = min
    } else if (num > max) {
        num = max
    }

    return num
};

// 考虑用状态机??
// 重新处理??
console.log(myAtoi('words and 987'))