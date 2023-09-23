// Solution 1: 递归二分搜索，要注意边界判断，取二分节点时的特殊情况
// T O(logn) S O(1)
function searchInsert(nums: number[], target: number): number {
    // 二分搜索
    let result: number = 0
    const binarySearch = (origins: number[], startIdx: number, endIdx: number, toFind: number) => {
        // 边界判定
        if (toFind <= origins[startIdx]) {
            result = startIdx
        } else if (toFind > origins[startIdx] && toFind < origins[endIdx]) {
            // binary search
            const mid = Math.floor((startIdx + endIdx) / 2)
            // 两数相邻时，mid会等于startIdx，此时需要判断
            if (mid === startIdx) {
                if (toFind === origins[startIdx]) {
                    result = startIdx
                } else if (toFind > origins[startIdx] && toFind < origins[endIdx]) {
                    result = startIdx + 1
                } else {
                    result = endIdx
                }
            } else {
                if (toFind >= origins[mid]) {
                    binarySearch(origins, mid, endIdx, toFind)
                } else {
                    binarySearch(origins, startIdx, mid, toFind)
                }
            }
        } else if (toFind === origins[endIdx]) {
            result = endIdx
        } else {
            result = endIdx + 1
        }
    }
    binarySearch(nums, 0, nums.length - 1, target)
    return result
};

// Solution 2: while 循环 二分搜索，关键在 L = M + 1 和 R = M - 1 的处理
// 只要 nums[M] < target, 那么 target 位置一定在 M 的右边，所以 L = M + 1
// 而整个循环运算中，二分法是从两侧向中间逼近的, 由于 nums[M] < target 一定成立，那么 L 的最终落点一定是最终确定点
//  当 L = R 时， L = R = M， nums[L] = nums[R] = num[M]
//             若 nums[M] < target满足, 那么 L = M + 1，循环终止， 最终点确定 L 的最新值
//             若 nums[M] < target不满足, 那么 R = M - 1，循环终止， 最终点确定 L 的最新值
function searchInsert1(nums: number[], target: number): number {
    let L = 0;
    let R = nums.length - 1;
    while (L <= R) {
        const M = (L + R) >> 1
        if (nums[M] < target) {
            L = M + 1
        } else {
            R = M - 1
        }
    }
    return L
};
// 类似上述，R的最终落点的前一个落点一定是最终确定点
function searchInsert2(nums: number[], target: number): number {
    let L = 0;
    let R = nums.length - 1;
    while (L <= R) {
        const M = (L + R) >> 1
        if (nums[M] >= target) {
            R = M - 1
        } else {
            L = M + 1
        }
    }
    return R + 1
};