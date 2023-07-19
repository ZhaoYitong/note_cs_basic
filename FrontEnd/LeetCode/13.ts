function romanToInt(s: string): number {
    // III => 1 + 1 + 1
    // LVIII => 50 + 5 + 1 + 1 + 1

    // IV => 1 + 5 - 1 - 1
    // IX => 1 + 10 -1 - 1
    // XL => 10 + 50 - 10 - 10
    // XC => 10 + 100 - 10 - 10
    // CD => 100 + 500 - 100 - 100
    // CM => 100 + 1000 - 100 - 100

    const charNumMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    const subCharsNum = {
        IV: -2,
        IX: -2,
        XL: -20,
        XC: -20,
        CD: -200,
        CM: -200
    }
    let result = 0
    for (let str of s) {
        result += charNumMap[str]
    }
    Object.keys(subCharsNum).forEach(subChar => {
        result += countRepeatTimeStr(subChar, s) * subCharsNum[subChar]
    })
    return result
};

// 字符串中 xx 出现的次数
const countRepeatTimeStr = (subStr: string, str: string): number => {
    if (str.includes(subStr)) {
        let count = 0;
        for (let i = 0; i < str.length - 1; i++) {
            if (str[i] + str[i + 1] === subStr) {
                count++
            }
        }
        return count
    } else {
        return 0
    }
}

///////////////////////////////////////////////////////////////////////////

function romanToInt1(s: string): number {
    let romanObj: Record<string, number> = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0
    for (let i = 0; i < s.length; i++) {
        let key = i + 1 >= s.length - 1 ? s.length - 1 : i + 1
        if (romanObj[s[i]] >= romanObj[s[key]]) {
            result += romanObj[s[i]]
        } else {
            result = result + romanObj[s[key]] - romanObj[s[i]]
            i = i + 1
        }
    }
    return result
};

////////////////////////////////////////////////////////////////////////////

function romanToInt2(s: string): number {
    s = s.replace('IV', 'a')
    s = s.replace('IX', 'b')
    s = s.replace('XL', 'c')
    s = s.replace('XC', 'd')
    s = s.replace('CD', 'e')
    s = s.replace('CM', 'f')

        const getVal = (str: string): number => {
        switch (str) {
            case 'I':
                return 1
            case 'V':
                return 5
            case 'X':
                return 10
            case 'L':
                return 50
            case 'C':
                return 100
            case 'D':
                return 500
            case 'M':
                return 1000
            case 'a':
                return 4
            case 'b':
                return 9
            case 'c':
                return 40
            case 'd':
                return 90
            case 'e':
                return 400
            case 'f':
                return 900
            default:
                return 0
        }
    }

    let res = 0
    for (let sub of s) {
        res += getVal(sub)
    }

    return res
};