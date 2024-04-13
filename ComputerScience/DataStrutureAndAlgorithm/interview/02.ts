// 寻找一串股票数据中的波峰
// 也要包括起始点终止点的判断

const stockDList: number[] = [10, 5, 6, 2, 3, 8, 9, 4, 7, 1, 17, 12, 11, 13, 14, 15, 16, 18, 19, 20]

const findHighPoints = (stockArr: number[]): number[] => {
   let results: number[] = []
   const len = stockArr.length
   if (len) {
      if (len > 1) {
         if (stockArr[0] > stockArr[1]) {
            results.push(stockArr[0])
         }
         for (let i = 1; i < stockArr.length - 1; i++) {
            if (stockArr[i] >= stockArr[i + 1] && stockArr[i] >= stockArr[i - 1]) {
               results.push(stockArr[i])
            }
         }

         if (stockArr[len - 1] > stockArr[len - 2]) {
            results.push(stockArr[len - 1])
         }
      } else {
         results = stockArr
      }
   }
   return results
}

const res = findHighPoints(stockDList)
console.log(res)