function strStr(haystack: string, needle: string): number {
    const needleLen = needle.length
    const hayStackLen = haystack.length
    if (needleLen > hayStackLen) {
        return -1
    } else if (needleLen === hayStackLen) {
        return needle === haystack ? 0 : -1
    } else {
        let p = 0
        let needleCount = 0
        while (p < hayStackLen) {
            if (haystack[p] === needle[0] && p + needleLen <= hayStackLen) {
                for (let i = 1; i < needleLen; i++) {
                    if (needle[i] !== haystack[p + i]) {
                        break
                    } else {
                        needleCount++
                    }
                }
                if (needleCount === needleLen - 1) {
                    return p
                }
            }
            needleCount = 0
            p++
        }
        return -1
    }
};

console.log(strStr('aabaaabaaac', 'aabaaac'))