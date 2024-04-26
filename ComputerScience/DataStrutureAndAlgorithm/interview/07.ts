// 深拷贝

// 常规
const deepCloneByJson = (obj: any) => {
    return JSON.parse(JSON.stringify(obj))
}
// 存在问题
// undefined, 任意函数, Symbol 值，在序列化中。若出现在非数组对象的属性中，会被忽略；若出现在数组中，则会转换成 null
// 任意函数、undefined 被单独转换时，会返回 undefined
// Date 日期调用了其内置的 toJSON() 方法转换成字符串，因此会被当初字符串处理
// NaN 和 Infinity 的数值及 null 都会当做null
// Map，Set，WeakMap，WeakSet 仅会序列化可枚举的属性
// 对包含 循环引用 的对象进行序列化，会抛错

const deepClone = (source: any) => {
    const isArray = (arr) => Object.prototype.toString.call(arr) === '[object Array]'

    const isObject = obj => obj !== null && (typeof obj === 'object' || typeof obj === 'function')

    const copy = input => {
        if (typeof input === 'function' || !isObject(input)) return input

        let output = isArray(input) ? [] : {}
        for (let key in input) {
            if (input.hasOwnProperty(key)) {
                const value = input[key]
                output[key] = copy(value)
            }
        }
        return output
    }

    return copy(source)
}