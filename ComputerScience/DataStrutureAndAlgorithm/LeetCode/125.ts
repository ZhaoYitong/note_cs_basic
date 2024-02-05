// 双指针移动
// solution1: 先预处理数据，再调用是否回文数的判断
// solution2: 不预处理数据，直接进行回文数判断，但复杂逻辑在指针处理
function isPalindrome(s: string): boolean {
    let i=0;
    let j=s.length - 1
    const testReg = /^[a-zA-Z\d]+$/
    while (i < j) {
        if (testReg.test(s[i])) {
            if (testReg.test(s[j])) {
                if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                    return false
                } else {
                    i++
                    j--
                }
            } else {
                j--
            }
        } else {
            i++
        }
    }
    // 补充处理 i===j，当i=j=1时也可处理
    return s[i].toLowerCase() === s[j].toLowerCase()
};