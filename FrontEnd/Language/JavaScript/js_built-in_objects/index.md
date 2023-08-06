- Proxy

```javascript
// const p = new Proxy(target, handler)
const handler = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : 37;
  },
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log("c" in p, p.c); // false, 37
```

- promise

  - race

    - 原理
      `当使用 Promise.race 方法时，传入的 Promise 对象按顺序放入任务队列中。然而，Promise 内部的调用是否作为宏任务或微任务执行取决于 Promise 的实现和 JavaScript 引擎的规范。在标准的 Promise 实现中，通常会将 Promise 的解决和拒绝操作作为微任务（microtask）执行。这意味着在同一个事件循环迭代中，微任务会优先执行，然后才会执行下一个宏任务。因此，如果所有 Promise 内部的调用都是作为微任务执行，那么第一个解决或拒绝的 Promise 的回调函数会在下一个事件循环迭代的微任务阶段执行，从而使得它的结果优先输出。然而，如果 Promise 内部的调用是作为宏任务执行，那么在下一个事件循环迭代的宏任务阶段执行，可能会导致其他任务先执行，因此不一定会保证第一个解决或拒绝的 Promise 的结果先输出。综上所述，Promise.race 方法本身只负责按顺序将 Promise 放入任务队列中，而每个 Promise 内部的具体调用是否作为微任务或宏任务执行取决于 Promise 的实现和 JavaScript 引擎的规范。`
    - 实现

      ```javascript
      function race(promises) {
        // 创建一个新的 Promise 对象
        return new Promise((resolve, reject) => {
          // 遍历传入的可迭代对象
          for (const promise of promises) {
            // 对每个 promise 注册解决处理函数
            promise.then(
              (value) => {
                // 如果有 promise 被解决，解决新的 Promise 对象
                resolve(value);
              },
              (reason) => {
                // 如果有 promise 被拒绝，拒绝新的 Promise 对象
                reject(reason);
              }
            );
          }
        });
      }
      ```
