// 常规思路，二维map填值，遍历输出
// T O(n) S O(n)
function convert(s: string, numRows: number): string {
    // 特殊情况，直接返回
    //     s 长度 <= numRows
    // 一般情况
    //     行数扩展
    //     列扩展 i j 动态变换，并填值，注意判断条件，字符走完
    //     遍历resultMap, 输出结果

    if (s.length <= numRows) {
        return s
    } else {
        let resultMap: Record<number, Record<number, string>> = {
            0: {
                0: ''
            }
        }
        for (let r: number = 0; r < numRows; r++) {
            resultMap[r] = {
                0: ''
            }
        }
        let count: number = 0
        let x: number = 0
        let y: number = 0
        let xBack: boolean = false
        let yAdd: boolean = false
        // x 行，y 列
        while (count < s.length) {
            // (0,0)            (0,3)
            // (1,0)      (1,2) (1,3)
            // (2,0) (2,1)
            // (3,0)
            if (resultMap[x]) {
                resultMap[x][y] = s[count]
            } else {
                resultMap[x] = {}
                resultMap[x][y] = s[count]
            }
            if (xBack) {
                x--
            } else {
                x++
            }

            if (yAdd) {
                y++
            }

            if (x === numRows - 1) {
                xBack = true
                yAdd = true
            }
            if (x === 0) {
                xBack = false
                yAdd = false
            }

            count++
        }
        let resultStr = ''
        Object.keys(resultMap).forEach((xKey) => {
            Object.keys(resultMap[xKey]).forEach(yKey => {
                resultStr += resultMap[xKey][yKey]
            })
        })
        return resultStr
    }
};

//////////////////////////////////////////////////////////////////

// 考虑一种场景，一排学生报数出列，只不过报数规则是从 1 到 maxRowNum，再从 maxRowNum 到 1，如此循环，直到最后一个报数结束
// 以4行为例
// 1 2 3 4 3 2 1 2 3 4 3 2 1 2 3 4 3 2 1....
// a b c d e f g h i j k l m n o p q r s....
// 那么对字符串遍历，设置对应报数号，就可以得到对应的行数，最终从第1行到第 maxRowNum 行输出结果
