function permute(nums: number[]): number[][] {
    // 考虑从长度为1开始，每增加一个数，本质上是对原来的数组的加塞
    // [1]

    // [1,2] [2,1]

    // [1,2,3][1,3,2][3,1,2][2,1,3][3,2,1][2,3,1]

    // [4,1,2,3]
    const L = nums.length
    if (L <= 1) {
        return [nums]
    } else {
        // 从初始一个num开始
        let result = [[nums[0]]]
        let i: number = 1
        while (i < L) {
            const preResult = result
            result = []
            preResult.forEach(it => {
                const preItemLen = it.length
                for (let m = 0; m <= preItemLen; m++) {
                    // 避免引用类型导致变更
                    // let newItem: number[] = it.map(iit => iit)
                    let newIt: number[] = []
                    // 对原数组插入新值
                    // 模拟splice效果
                    for (let n = 0; n <= preItemLen; n++) {
                        if (m === n) {
                            newIt.push(nums[i])
                        }
                        if (n < preItemLen) {
                            newIt.push(it[n])
                        }
                    }
                    result.push(newIt)
                }
            })
            i++
        }
        return result
    }
};
