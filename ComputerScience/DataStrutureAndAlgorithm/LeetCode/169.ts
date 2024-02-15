// Solution1: T O(N * N / 2) S O(1)
function majorityElement(nums: number[]): number {
    const compare = Math.floor(nums.length / 2)

    const halfFlag = Math.ceil(nums.length / 2)
    // 遍历一半即可
    let result: number = 0
    for (let i = 0; i < halfFlag; i++) {
        let count = 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                result = nums[i]
                count++
            }
            if (count > compare) {
                break
            }
        }
        if (count > compare) {
            break
        }
    }
    return result
};

// Solution2: T O(N) S O(1)
// 投票原则，遇到一个不同的，则两两抵消，剩余的样本中依旧存在出现次数大于半数以上的值
function majorityElement1(nums: number[]): number {
    let count = 0
    let candidate: number = 0
    const halfLen = Math.ceil(nums.length / 2)
    for (let i = 0; i < nums.length; i++) {
        if (count <= 0) {
            candidate = nums[i]
        }
        count += (nums[i] === candidate) ? 1 : -1
        if (count >= halfLen) {
            break
        }
    }

    return candidate
};