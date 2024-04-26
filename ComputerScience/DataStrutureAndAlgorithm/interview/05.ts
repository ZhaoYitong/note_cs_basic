// 手写 promise.all

function isPromise(value: any) {
    if (typeof value === 'function' || (typeof value === 'object' && value !== null)) {
        if (typeof value.then === 'function') {
            return true
        }
    }
    return false
}

const CustomPromiseAll = (values: Promise<any>[]) => {
    return new Promise((resolve, reject) => {
        let result: any[] = []
        let times = 0

        const postSuccess = (i: number, value: any) => {
            result[i] = value
            if (++times === values.length) {
                resolve(result)
            }
        }

        for (let j = 0; j < values.length; j++) {
            const current = values[j]
            if (isPromise(current)) {
                current.then(val => {
                    postSuccess(j, val)
                }).catch(e => {
                    reject(e)
                })
            } else {
                postSuccess(j, current)
            }
        }
    })
}

//////////////////////////////////////////////////////////////////

// 手写 promise.race()
const customPromiseRace = (values: any[]): Promise<any> => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < values.length; i++) {
            const current = values[i]
            if (isPromise(current)) {
                current.then(resolve, reject)
            } else {
                resolve(current)
            }
        }
    })
}

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success")
    }, 4000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Failed")
    }, 2000)
})

customPromiseRace([p1, p2]).then(values => {
    console.log('success', values)
}).catch(e => {
    console.log('e', e)
})
