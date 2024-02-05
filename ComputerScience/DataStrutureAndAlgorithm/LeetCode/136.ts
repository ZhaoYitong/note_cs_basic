// 异或运算 !!!
function singleNumber(nums: number[]): number {
    let r: number = 0
    nums.forEach(n => {
        r ^= n
    })
    return r
};