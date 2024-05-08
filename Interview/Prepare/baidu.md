基本数据类型
箭头函数
介绍 promise
能不能手写出 promise
promise 相关的题目：值的传递、错误捕获等综合题目

Promise 可以链式调用，它是怎么做到 链式调用的

React 里面 虚拟DOM 有啥用，为啥不直接更新 DOM
虚拟DOM优势？

写遍历的时候，key 有什么用
描述 一下 JS 事件循环
异步的任务有区别：宏任务 和 微任务
在setTimeout 里产生一个promise，当前的promise 会在当前 次执行掉吗？还是在下一次循环里执行？
在ES6，let 和 const 有什么区别
声明 object 和 number 存放位置？
浏览器的缓存机制：强缓存、协商缓存
http 3次 握手？为什么要握手3次，握手的流程？
http 4次 挥手

```javascript

setTimeout(function () {
    console.log(1)
}, 0);

new Promise(function executor(resolve) {
    console.log(2);
    for (var i = 0; i < 10000; i++) {
        i == 9999 && resolve();
    }
    console.log(3);
}).then(function () {
    console.log(4);
});

console.log(5);


```


浏览器数据存储的方式
使用的时候一般什么样的数据存在cookie、什么样的数据存 localStorage
https 有哪些优势？加密数据，防止泄漏；保证数据的完整性;