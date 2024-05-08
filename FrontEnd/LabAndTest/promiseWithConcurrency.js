// /**
//    * 1. 总共有100个请求需要发送
//    * 2. 指定可以并行的任务数为n
//    * 3. 前面任务完成，可执行后一个任务，直至任务全部结束
//    * 不能直接返回一个promise，直接返回一个promise, 直接返回其实已近就执行了(相当于已近发送请求了)1s之后都会resolve了
//    *  升阶一下，每个函数返回一个函数，该函数在需要时执行后(相当于发送请求)若干时间后返回结果
//    * */
// const promiseFn = (num) => () => new Promise((resolve) => {
//     setTimeout(() => {
//         // 模拟每个任务需要若干时间
//         resolve(num)
//     }, 1000 * Math.random())
// })

// // 获取若干个请求列表
// const getPromiseList = (n = 100) => {
//     let promiseList = [];
//     for (let i = 0; i < n; i++) {
//         promiseList.push({
//             // 这里直接传入i，方便后续自行排查返回结果的顺序是否符合要求
//             promiseFn: promiseFn(i),
//             done: false,
//             idx: i,
//             send: false
//         })
//     }
//     return promiseList
// }

// const checkAllDone = (fnList) => {
//     return fnList.some(it => !it.done) ? false : true
// }

// const fn = (maxNum, funcNum) => {
//     // 做修正，保证forEach 循环的初始一轮的并发数有效
//     if (maxNum >= funcNum) {
//         maxNum = funcNum
//         console.log(maxNum)
//     }
//     const promiseList = getPromiseList();
//     // 收集对应的结果，发送的结果和收集的结果一一对应
//     const resultList = new Array(funcNum)

//     return new Promise((resolve) => {
//         // 执行单个promise
//         const runPromiseItem = () => {
//             // 寻找数组中还未发出的请求
//             const executePromise = promiseList.find(v => !v.send)
//             if (!executePromise) {
//                 // 已全部发送请求了，递归出口条件
//                 console.log(`这部分递归已全部处理结束:`);

//                 // 一种可能是在递归中结束最后的请求，这里加校验
//                 if (checkAllDone(promiseList)) {
//                     console.log(resultList)
//                     resolve(resultList)
//                 }
//                 return
//             }
//             executePromise.send = true;
//             executePromise.promiseFn().then(val => {
//                 resultList[executePromise.idx] = `已获取: ${val}`
//                 executePromise.done = true
//                 runPromiseItem()
//             })
//         }

//         for (let asyncTask = 0; asyncTask < maxNum; asyncTask++) {
//             const currentPromise = promiseList[asyncTask]
//             promiseList[asyncTask].send = true
//             currentPromise.promiseFn().then(val => {
//                 resultList[currentPromise.idx] = `已获取: ${val}`
//                 currentPromise.done = true
//                 // 一种可能是在开始递归前即结束所有请求，那么在递归开始前也加校验，避免无法resolve
//                 if (checkAllDone(promiseList)) {
//                     resolve(resultList)
//                     return
//                 }
//                 runPromiseItem()
//             })
//         }
//     })

// }
// // 最大并发任务数为69
// // github codespace 上的内存空间有限，并发数过多容易爆
// fn(60, 10000).then(res => {
//     console.log('getAllResults')
//     console.log(res)
// })
