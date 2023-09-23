function lengthOfLastWord(s: string): number {
    const arr = s.split(" ").filter(i => i !== "" && i !== " ")
    return arr[arr.length - 1].length
};

function lengthOfLastWord1(s: string): number {
    let wordLen = 0
    let i = 0
    let startCount = -1
    let endCount = 0
    while (i < s.length) {
        if (s[i] !== ' ') {
            if (startCount < 0) {
                startCount = i
            }
            endCount = i + 1
            const currentLen = endCount - startCount
            wordLen = currentLen
        } else {
            if (startCount >= 0) {
                let newMax = endCount - startCount
                wordLen = newMax
            }
            startCount = -1
        }
        i++
    }
    return wordLen
};

function lengthOfLastWord2(s: string): number {
    let wordLen = 0
    let i = s.length - 1
    let isCount = false
    while (i >= 0) {
        if (s[i] !== ' ') {
            if (!isCount) {
                isCount = true
            }
            wordLen++
        } else {
            if (isCount) {
                break
            }
        }
        i--
    }

    return wordLen
};