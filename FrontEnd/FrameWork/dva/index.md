- dva-loading
`监听异步加载状态`

```javascript

const isLoading = loading.effects['user/query']

// 其中 user/query 是model中的异步请求方法
/* loading 在异步请求发出那一刻会持续监听该异步请求方法的状态，在异步请求结束之前 isLoading 的值一直是 true，当此次异步请求结束时 isLoading 的值变成 false，同时 loading 对象停止监听。 */

// 类似 RxJS???

```

[refs](https://www.jianshu.com/p/61fe7a57fad4)