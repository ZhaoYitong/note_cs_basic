/**
   * 1. 总共有100个请求需要发送
   * 2. 指定可以并行的任务数为n
   * 3. 前面任务完成，可执行后一个任务，直至任务全部结束
   * 不能直接返回一个promise，直接返回一个promise, 直接返回其实已近就执行了(相当于已近发送请求了)1s之后都会resolve了
   *  升阶一下，每个函数返回一个函数，该函数在需要时执行后(相当于发送请求)若干时间后返回结果
   * */

// Solution 1，每成功执行一次后即查询一次，继续执行剩余待处理func，存在时间复杂度（每次遍历执行和递归）
const promiseFn = (num: number) => () => new Promise((resolve) => {
    setTimeout(() => {
        // 模拟每个任务需要若干时间
        resolve(num)
    }, 1000 * Math.random())
})

type PromiseItem = {
    promiseFn: () => Promise<any>
    done: boolean
    idx: number
    send: boolean
}
// 获取若干个请求列表
const getPromiseList = (n = 100) => {
    let promiseList: PromiseItem[] = [];
    for (let i = 0; i < n; i++) {
        promiseList.push({
            // 这里直接传入i，方便后续自行排查返回结果的顺序是否符合要求
            promiseFn: promiseFn(i),
            done: false,
            idx: i,
            send: false
        })
    }
    return promiseList
}

const checkAllDone = (fnList: PromiseItem[]) => {
    return fnList.some(it => !it.done) ? false : true
}

const fn = (maxNum: number, funcNum: number) => {
    // 做修正，保证forEach 循环的初始一轮的并发数有效
    if (maxNum >= funcNum) {
        maxNum = funcNum
    }
    const promiseList = getPromiseList();
    // 收集对应的结果，发送的结果和收集的结果一一对应
    const resultList = new Array(funcNum)

    return new Promise((resolve) => {
        // 执行单个promise
        const runPromiseItem = () => {
            // 寻找数组中还未发出的请求
            const executePromise = promiseList.find(v => !v.send)
            if (!executePromise) {
                // 已全部发送请求了，递归出口条件
                // 结束递归
                return
            }
            executePromise.send = true;
            executePromise.promiseFn().then(val => {
                resultList[executePromise.idx] = `已获取: ${val}`
            }).catch((err) => {
                resultList[executePromise.idx] = err
            }).finally(() => {
                executePromise.done = true
                // 单个func执行结束后便判定是否全部执行
                if (checkAllDone(promiseList)) {
                    resolve(resultList)
                }
                runPromiseItem()
            })
        }

        for (let asyncTask = 0; asyncTask < maxNum; asyncTask++) {
            const currentPromise = promiseList[asyncTask]
            promiseList[asyncTask].send = true
            currentPromise.promiseFn().then(val => {
                resultList[currentPromise.idx] = `已获取: ${val}`
            }).catch((err) => {
                resultList[currentPromise.idx] = err
            }).finally(() => {
                currentPromise.done = true
                // 一种可能是在开始递归前即结束所有请求，那么在递归开始前也加校验，避免无法resolve
                if (checkAllDone(promiseList)) {
                    resolve(resultList)
                    return
                }
                runPromiseItem()
            })
        }
    })

}
// 最大并发任务数为69
// github codespace 上的内存空间有限，并发数过多容易爆
fn(60, 200).then(res => {
    console.log(res)
})
