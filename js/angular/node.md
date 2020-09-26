#### 变更检测 (change detection)

Angular 框架会通过此机制将应用程序 UI 的状态与数据的状态同步。变更检测器在运行时会检查数据模型的当前状态，并在下一轮迭代时将其和先前保存的状态进行比较。

当应用逻辑更改组件数据时，绑定到视图中 DOM 属性上的值也要随之更改。变更检测器负责更新视图以反映当前的数据模型。类似地，用户也可以与 UI 进行交互，从而引发要更改数据模型状态的事件。这些事件可以触发变更检测。

使用默认的（“CheckAlways”）变更检测策略，变更检测器将遍历每个视图模型上的[视图层次结构](https://angular.cn/guide/glossary#view-tree)，以检查模板中的每个[数据绑定属性](https://angular.cn/guide/glossary#data-binding)。在第一阶段，它将所依赖的数据的当前状态与先前状态进行比较，并收集更改。在第二阶段，它将更新页面上的 DOM 以反映出所有新的数据值。

如果设置了 `OnPush`（“CheckOnce”）变更检测策略，则变更检测器仅在[显式调用](https://angular.cn/api/core/ChangeDetectorRef)它或由 `@Input` 引用的变化或触发事件处理程序时运行。这通常可以提高性能。欲知详情，参见[优化 Angular 的变更检测](https://web.dev/faster-angular-change-detection/)。



相关结论:

1. Profile the application with Chrome DevTools to see where the slowdowns are coming from.
2. Introduce the `OnPush` change detection strategy to prune a component's subtrees.
3. Move heavy computations to pure pipes to allow the framework to perform caching of the computed values.