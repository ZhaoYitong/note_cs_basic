function lengthOfLongestSubstring(s: string): number {
    const len = s.length
    let resultLen = 0
    for (let i = 0; i <= len; i++) {
        let map: any = {}
        for (let j = 0; j < len; j++) {
            if (j + i <= len) {
                const currentSi = getSiblings(i, s, j)
                if (currentSi && !map[currentSi]) {
                    map[currentSi] = currentSi
                }
            } else {
                break
            }
        }
        const currentStrLen = Object.keys(map).length
        resultLen = resultLen > currentStrLen ? resultLen : currentStrLen
        console.log(Object.keys(map))
    }

    return resultLen
};

const getSiblings = (checkLen: number, str: string, startIdx: number) => {
    let result = ''
    let map: any = {}
    for (let i = 0; i < str.length; i++) {
        if (startIdx <= i && i <= startIdx + checkLen - 1) {
            if (!map[str[i]]) {
                map[str[i]] = str[i]
                result += str[i]
            } else {
                result = ''
                break
            }
        }
    }
    return result
}

const test = "abcabcbb"
console.log('lengthOfLongestSubstring', lengthOfLongestSubstring(test))