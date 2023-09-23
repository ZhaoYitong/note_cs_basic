function removeDuplicates(nums: number[]): number {
    let testMap = {}
    let results: number[] = []
    nums.forEach((num) => {
        if (!testMap[num]) {
            testMap[num] = true
            results.push(num)
        }
    })
    return results.length
};