// T O(n) S O(1)
function plusOne(digits: number[]): number[] {
    let nextAddon = 0
    for (let i = digits.length - 1; i >= 0; i--) {
        const currentAddon = i === digits.length - 1 ? 1 : 0
        const newVal = digits[i] + currentAddon + nextAddon
        const newDigit = newVal % 10
        digits[i] = newDigit
        nextAddon = newVal >= 10 ? 1 : 0
    }
    if (nextAddon > 0) {
        return [nextAddon, ...digits]
    } else {
        return digits
    }
};

// T O(n) S O(1)
// 仅考虑进位场景 9, 99, 999, 9999
function plusOne1(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++
        digits[i] = digits[i] % 10
        // 加 1 后不为0，说明不需要进位，直接返回。如果为0，那么高位继续加 1，重复循环
        if (digits[i] !== 0) {
            return digits
        }
    }
    return [1, ...digits]
};