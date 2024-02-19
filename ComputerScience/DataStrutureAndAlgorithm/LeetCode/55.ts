// Solution1: T O(n) S O(1)
function canJump(nums: number[]): boolean {
    let reach = 0
    for (let i = 0; i < nums.length; i++) {
        // 大于 reach 意味着不可达到
        if (i <= reach) {
            reach = Math.max(reach, nums[i] + i)
            if (reach >= nums.length - 1) {
                return true
            }
        }
    }
    return false
};

// Solution2: T O(n)
function canJump1(nums: number[]): boolean {
    let reach = 0
    const L = nums.length
    for (let i = 0; i <= reach && reach < L - 1; i++) {
        reach = Math.max(reach, i + nums[i])
    }
    return reach >= L - 1
};