#### react-dom
[ReactDOM](https://zh-hans.reactjs.org/docs/react-dom.html)


#### React Hooks

- useState
- useEffect
- useMemo
- useCallback
- useRef
- useContext

- useState 用于持有私有状态，不同的 Hooks 实例状态隔离 (参考 Action、TableList 组件实现)

- useEffect 处理副作用，可以用于发起请求或者事件监控

- useMemo，useCallback 类似，前者返回一个计算后的值，后者返回一个记忆函数

- useEffect、useMemo、useCallback 注意添加合适的监听对象，避免无效调用

- 自定义 hooks 不能包含逻辑分支 和 For 循环，如果需要根据传入值做不同的处理，可以把分支语句写在 useEffect 内

- useRef 的 current 值，在 hooks 更新阶段不会变更，所以可以用于判断 hook 的加载卸载，ahooks 中的 useMount 就是用 useRef 实现

- useContext 需要结合 Context Provider 使用，用于跨层获取祖先状态，umi 中 useModel 的实现利用了 context