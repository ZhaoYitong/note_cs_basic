// solution1: T O(n^2) S O(1)
function twoSum(nums: number[], target: number): number[] {
    for (let i=0; i<nums.length -1; i++) {
        for (let j=i+1; j<=nums.length - 1; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            } else {
                continue;
            }
        }
    }
    return [];
};



// solution2: T O(n) S O(n)
// function twoSum(nums: number[], target: number): number[] {
//     let numMap: Record<string, { val: number, index: number }> = {}
//     nums.forEach((v, idx) => {
//         numMap[v] = {
//             val: v,
//             index: idx
//         }
//     })
//     for (let i=0; i<nums.length -1; i++) {
//         if (numMap[target - nums[i]] && numMap[target - nums[i]].index !== i) {
//             return [i, numMap[target - nums[i]].index]
//         }
//     }

//     return []
// };

// console.log(twoSum([2,7,11,15], 9))