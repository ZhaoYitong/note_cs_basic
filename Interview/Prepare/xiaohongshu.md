```javascript
const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('resolve3');
        console.log('timer1')
    }, 0)
    resolve('resovle1');
    resolve('resolve2');
}).then(res => {
    console.log(res)
    setTimeout(() => {
        console.log(p1)
    }, 1000)
}).finally(res => {
    console.log('finally', res)
})


```


字符串全排列：输入一个字符串，打印出该字符串中字符的所有排列。结果放在字符串数组中返回，但里面不能有重复元素。
输入：s = “abc”
输出：[“abc”,“acb”,“bac”,“bca”,“cab”,“cba”]

esm 和 cjs 的区别
requestAnimationFrame和requestIdleCallback 的执行时机，谁先执行？ requestIdleCallback 是绘制前执行还是绘制后执行？
React Fiber 遍历DOM结构的顺序是？
说两个场景啊：自适应布局的：有一个父容器，3个子组件，和父组件等高的，3个子组件均分父组件的宽度
那如果非均分呢？每一个字符串填充字符串，取决于字符串的多少？
说一下 em、rem、vw、vh、rpx 的含义
useMemo 和 useCallback 的区别
手写实现 new 方法

https://blog.51cto.com/u_13341/8972925

https://blog.51cto.com/u_12868/7619364

https://juejin.cn/post/7298927442488754213

https://enzezy.github.io/interview/interview/%E5%B0%8F%E7%BA%A2%E4%B9%A6.html

https://www.iamshuaidi.com/31327.html

https://www.kancloud.cn/hanxuming/realquestionsforfrontend/3194041

https://m.kanzhun.com/firm/interview/detail/1nVy3Nm0Elc~.html

https://blog.csdn.net/qq_41579104/article/details/131235631