// Solution: 常规遍历，截取遍历长度
let m = {}

function f1(y: number): number {
    if (m[y]) {
        return m[y]
    } else {
        let c = 0
        // 模拟平方
        for (let i = 0; i < y; i++) {
            c += y
        }
        m[y] = c
        return c
    }
}

// result = x 的 1/2 次方
// x 的 1/2后的平方必大于 x，
// 1*1 = 1
// 2 => 1
// 3 => 1
// 4 => 2
// 5 => 2
// 6 => 2
// 7 => 2
function mySqrt(x: number): number {
    if (x <= 1) {
        return x
    }
    const mid = Math.floor(x / 2)
    for (let i = 1; i <= mid; i++) {
        const r = f1(i)
        if (r === x) {
            return i
        } else if (r > x) {
            return i - 1
        } else {
            const r2 = f1(i + 1)
            if (r2 > x) {
                return i
            } else {
                continue
            }
        }
    }
    return 0
};

// Solution 2: 二分法
function mySqrt1(x: number): number {
   if (x <= 1) {
       return x
   } else {
       let left = 1
       let right = Math.floor(x / 2)
       // 初始 [left, right]
       while (left < right) {
           const mid = Math.floor((left + right) / 2)
           const r = mid * mid
           if (r > x) {
               right = mid
           } else if (r === x) {
               return mid
           } else {
               // r < x
               const midAfterR = (mid + 1) * (mid + 1)
               if (midAfterR > x) {
                   return mid
               } else if (midAfterR === x) {
                   return mid + 1
               } else {
                   left = mid + 1
               }
           }
       }
       return left
   }
};