// 依次减去最大数到最小数
// T O(1) S O(1)
function intToRoman(num: number): string {
    const fromBigToSmall = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let result = ''
    let sum = 0
    Object.keys(fromBigToSmall).forEach(k => {
        while (sum + fromBigToSmall[k] <= num) {
            sum += fromBigToSmall[k]
            result += k
        }
    })

    return result
};

// 利用商和余数
// T O(1) S O(1)
function intToRoman1(num: number): string {
    const thousands = ["", "M", "MM", "MMM"];
    const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    let roman = '';
    roman +=thousands[Math.floor(num / 1000)]
    roman +=hundreds[Math.floor(num % 1000 / 100)]
    roman +=tens[Math.floor(num % 100 / 10)]
    roman +=ones[num % 10]
    return roman
};