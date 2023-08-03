- 微前端怎么部署

- 系统内子应用是如何划分的

- 子应用之间如何复用依赖，跨模块引用

- 如何解决多份依赖重复打包问题
    - 公共依赖如何优化打包，优化加载

- 是否有关注其他微前端

- 沙箱究竟解决什么问题，本质，没有沙箱会怎么样
    - 污染问题怎么处理，怎么避免

- 代码扫描， AST树的实际节点判断，节点是否涉及到模板类型，模板语言?
    - 写入代码时是否会有格式问题
    - 具体用到的babel原理
    - path 和 node 的区分

- class component 和 函数组件，用或者不用，详细对比原理
    - 什么场景用
    - 组件之间关联调用，父子组件调用，class component 如何处理的，hooks 是如何处理的
    - 完整的生命周期原理

    - class 组件迁移到函数组件的坑，如何有效的渐进式迁移
        - 考察react两种组件的实现差异

- promise.race 原理
    - promise.race 结合setTimeout，打印输出
    - 如果某个promise 失败，最终输出结果是？
    - 如果内部所有promise 都失败，结果返回是?
    - 结合以上用原生js实现promise.race 方法，适配失败异常的场景

- promise 可以resolve多次吗，如果resolve 后加console.log，console.log 是否还会执行


