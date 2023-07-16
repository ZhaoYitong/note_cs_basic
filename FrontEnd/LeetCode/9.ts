function isPalindrome(x: number): boolean {
    let result = true
    if (x >= 0) {
        const str = x.toString()
        const reverseStr = x.toString().split('').reverse().join('')
        for (let i = 0; i < str.length - 1; i++) {
            if (str[i] !== reverseStr[i]) {
                result = false
                break
            }
        }
    } else {
        result = false
    }

    return result
};

// get the reverse number 1234 -> 4321
function isPalindrome1(x: number) {
    if (x < 0) return false;
    let cur = 0;
    let num = x;
    while (num > 0) {
        cur = cur * 10 + num % 10;
        num = Math.floor(num / 10);
        console.log('cur', cur)
        console.log('num', num)
        console.log('cur - num')
    }
    return cur === x;
}
