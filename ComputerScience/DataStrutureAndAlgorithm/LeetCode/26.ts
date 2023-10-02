
function removeDuplicates(nums: number[]): number {
    let testMap: any = {}
    let results: number[] = []
    nums.forEach((num) => {
        if (!testMap[num]) {
            testMap[num] = true
            results.push(num)
        }
    })
    return results.length
};

// Solution 2
// T O(n) S O(1)
// 双指针 p q 从头开始遍历 q 指向的元素与 p 指向的元素不相等时，将 q 指向的元素赋值给 p + 1 的位置 p++ q++
function removeDuplicates1(nums: number[]): number {
    if (Array.isArray(nums) && nums.length) {
        let p = 0
        let q = 1
        while (q < nums.length) {
            if (nums[p] !== nums[q]) {
                if (p + 1 < q) {
                    nums[p + 1] = nums[q]
                }
                p++
            }
            q++
        }
        return p + 1
    } else {
        return 0
    }
};