#### react-dom
[ReactDOM](https://zh-hans.reactjs.org/docs/react-dom.html)


#### React Hooks

- 钩子
    - [react hooks 使用误区与规范](https://github.com/brickspert/blog/issues/45)

    - reackt
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


- 经典问题
    - 为什么 hooks 不能放在条件判断里
        - 可以想象组件的某个属性上存在一个hook链表。链表上有很多节点（每个useState、useMemo等)。节点上包括它的值，和一个链表（存储每次setState进来的值， 计算后会转化为值）。每次更新的时候，都会根据原hook链表重新构建新hook链表，相当于拷贝过来，因此旧值也存储过来了。如果hook链表有变动旧值可能就拷不过来
    - react 的哪些类组件无法被函数组件替代
        ```javascript
            // 挂载前顺序
            // 设置props默认值
            static defaultProps

            static propTypes

            constructor()

            componentWillMount()

            render()

            // 挂载后
            componentDidMount()

            //// 组件运行时
            componentWillReceiveProps() // 父组件重新 render，props 改变

            // 更新前
            static getDerivedStateFromProps(props, state) // 17.x

            shouldComponentUpdate() // 父组件更新，子组件必然更新，是否需要更新当前组件

            componentWillUpdate() // 17.x deleted

            render()

            // 更新后顺序
            static getSnapshotBeforeUpdate(prevProps, preState) // 17.x

            componentDidUpdate()

            // 卸载
            componentWillUnmount()

        ```

#### React Fiber

