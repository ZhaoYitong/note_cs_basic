// T O(n^2) S O(n)
function lengthOfLongestSubstring(s: string): number {
    const sLen = s.length
    if (sLen <= 1) {
        return sLen
    } else {
        // 已知js支持 substr(from,length)，例如 'abcde'.substr(1,2) => 'bc'
        // 双指针滑动窗口法
        // 初始start下标为0，初始长度len为1, 默认初始最长子串为s.substr(start,len)
        // len自增
        // 判断s.substr(start,len)是否符合子串规范
        //      符合 => len继续自增，重复上述判断
        //      不符合 => start自增，重复上述判断
        // 上述循环进行前，优先判断 start+len >= s.length
        //      如果大于，则后续滑动指针无意义，输出len
        //      如果小于，则可以继续

        let start = 0
        let len = 1
        let find = false
        while (!find) {
            if (start + len >= sLen) {
                find = true
            } else {
                len++
                const subStr = s.substring(start, start + len)
                let testMap: any = {}
                let isSubStr = true
                for (let item of subStr) {
                    if (testMap[item]) {
                        isSubStr = false
                        break
                    } else {
                        testMap[item] = item
                    }
                }

                if (!isSubStr) {
                    len--
                    start++
                }
            }
        }
        return len
    }
};

console.log(lengthOfLongestSubstring('abcabcbb'))

// 滑动窗口，最大程度避免重复判断问题
// 时间复杂度 O(n^2) 空间复杂度 O(n)
function lengthOfLongestSubstring1(s: string): number {
    let res = '';
    let max = 0;
    for (let c of s) {
        const idx = res.indexOf(c);
        if (idx >= 0) {
            res = res.substring(idx + 1)
        } 
        res += c;
        max = Math.max(max, res.length);
    }
    return max;
};