// Solution: 双指针两边缩进到中间。每次向内移动的指针只能从较小的数值移动，因为较小的数值决定了总容积的上限，如果移动较大的数值，那么容积只会变小。
// T = O(n) S = O(1)
function maxArea(height: number[]): number {
    let L = 0;
    let R = height.length - 1;
    let res = 0
    while (L < R) {
        if (height[L] < height[R]) {
            res = Math.max(res, (R-L)*height[L])
            L++
        } else {
            res = Math.max(res, (R-L)*height[R])
            R--
        }
    }

    return res
};