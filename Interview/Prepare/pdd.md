一面

1、询问工作经历，在项目中如何做性能优化的？

2、有用过状态管理吗？说说redux 的理念；

3、flex: 0 1 auto; 是什么意思？

4、less 的 & 代表什么？

5、react 16 生命周期有什么改变？

6、详细的介绍一下 getDerivedStateFromProps

7、interface 和 type 的区别

（1）type可以声明 基本类型，联合类型，元组 的别名，interface不行

（2）type 语句中可以使用 typeof 获取类型实例

（3）type 支持类型映射，interface不支持

（4）interface能够声明合并，type不能

 

8、有用过ssr 吗？

9、node 熟悉吗？

10、算法题：求最大公共前缀；


二面

1、webpack 如何实现动态加载

2、react 里有动态加载的 api 吗？

3、React.lazy 的原理是什么？

4、webpack 能动态加载 require 引入的模块吗？

5、require 引入的模块 webpack 能做 Tree Shaking 吗？

6、设计一个input 组件需要哪些属性？

7、value 的类型是什么？

8、有一个a标签，如何动态的决定他的样式。

9、import 和 require 导入的区别

（1）require 是 AMD规范引入方式；import是es6的一个语法标准，如果要兼容浏览器的话必须转化成es5的语法

（2）require是运行时调用，所以require理论上可以运用在代码的任何地方；import是编译时调用，所以必须放在文件开头

（3）本质上，require是赋值过程，其实require的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量；而import是解构过程，但是目前所有的引擎都还没有实现import，我们在node中使用babel支持ES6，也仅仅是将ES6转码为ES5再执行，import语***被转码为require；

 

10、require 有什么性能问题

11、class 组件与函数式组件的区别

12、css 优先级

答：important > 内联 > ID选择器 > 类选择器 > 标签选择器

 

13、避免 css 全局污染。

14、css modules 的原理

15、组件库如何做按需加载

16、onChange 怎么规定 value 的类型

17、interface 和 type 的区别

18、写一个 promise 重试函数，可以设置时间间隔和次数。

三面

1、组件平台有哪些功能？然后详细的跟我讨论组件平台的设计。

2、实现一个 redux。实现 createStore 的功能，关键点发布订阅的功能，以及取消订阅的功能。

3、用 ts 实现一个 redux；


一面

有没有做过比较复杂的页面？React-imvc 做了什么？
使用 Redux 的好处，以及和 Mobx 的区别
对 React 最新特性有了解吗？class 组件和函数组件的区别？
useState 为什么不能放到条件语句里面？
实现一个 Promise.all
React SSR 是怎么实现的？
有用过代码规范相关的吗？Eslint 和 Prettier 冲突怎么解决？
实现一个数组转树形结构的函数

二面

说几个你觉得足够复杂的项目？
你是怎么去做 React SSR 的？
有没有做过性能优化相关的？
实现一个深拷贝
实现一个二叉搜索树转链表的方法


//////////////////////////////////////////////////////////

一面
d3 和 echarts 有什么区别？ canvas 和 svg有什么区别？
讲讲对react context的理解？
webSocket是全双工通信？如何判断掉线？
如何创建一个dom元素，将其添加到body元素中，重复添加十次，会生成一个节点还是十个？
类数组转换成数组有哪些方法？（说出三种），可以直接用遍历吗？es6的set可以转换成数组吗？
es6的map的foreach方法了解不？
array有哪些方法可以返回一个新的数组？
讲讲array的reduce的用法？
说出集中垂直居中，水平居中的方法？
flex用过吗？ grid用过吗？可以在grid中写flex的aligin-items之类的吗？
用过TypeScript吗？在什么情景下使用，遇见过什么问题？
如何判断一个变量的类型？
箭头函数的this指向？
async await 如何抛出异常？
webpack 配置如何做性能优化？

二面
自我介绍，了解项目
代码题： 手写实现call,apply,bind
http请求头部有哪些？
css选择器有哪些？
箭头函数跟普通函数有什么不同？箭头函数有什么具体的用处，举个实际应用？
了解redux吗？redux中间件有接触过吗？

面试官：先来个布局的吧！如何让一个元素垂直居中
我：行内元素就line-height、块级元素就flex、grid、table-cell布局都可以，还有定位+translate，这个兼容性较好。
面试官：了解过新的css属性？比如layer
我：没有
面试官：说一下this
我：this是运行时上下文，是函数内为了访问类的属性而存在，其中箭头函数的this就是其定义时外部的this，而bind、call、apply都可以改变函数内this的指向。
面试官：箭头函数的this可以改变吗？
我：没试过
面试官：做道题吧，深拷贝
我：知道，但是没写过
我：写了个递归+复制对象的属性
面试官：如果入参不是对象怎么办，比如boolean、number、string、null、undefined、array
我：补充了很多判断代码，基础数据类型/null/undefined就直接返回、array/objet就forin遍历然后返回
面试官：如果a对象引用了b对象，b对象引用了a对象怎么办，引用循环问题
我：写了一个cache缓存器，如果遍历过程中cache中有a，则直接返回，不再深拷贝
面试官：你这个cache怎么清空，什么时候清空
我：这里我并没有将cache传入给深拷贝函数，在函数体里面清空，而是在函数体外定义、清空cache。然后面试官推荐了一个写法，将cache传入进去，然后在深度为1时清空它。属于缓存优化
面试官：再做一道题吧，promise相关的
我：如果了解promise的话，这题不难，说出打印顺序即可


面试官：你先做一下这道题，只能使用队列，不能使用别的数据结构来实现栈的功能。
我：考虑了几分钟后，我说出了思路，在入栈时，调用的入队，同时更新min最小值。
出栈时将队列中的最后一位的前面的元素都拿出来，然后放入队列后，然后拿出最后一个就是出栈元素。
但是打印最小值时有点问题，我想了一会，然后得出，在出栈时，会遍历到所有的元素，所以可以在这个过程更新最小值。
面试官：好，那你写出来吧
我：写呀写，写完之后，有个用例没法通过，然后人脑debug一下，原来在出栈时，更新最小值时，得先将最小值重置。
面试官：问了简历里，写的所有的项目
我：我是做b端的金融web网站，所以其实不太会有实现的难点，所以能说的很浅
面试官：为什么离开上家公司
我：因为我一直得用vue2+element来做项目，想用新的技术栈，比如react、vue3来做
面试官：那你说一下vue和react的差别吧
我：vue2了解的多，react了解不多，两者最大的区别是虚拟dom结构，vue2是一颗结构很正常的树，react是一个fiber树，两者树的实现方式不一样。react的patchnode算法和vue的不一样，react是全量比较vDom，vue是组件层级比较vDom。react和vue的对于children的比较算法也不一样，然后，个人觉得vue高效一些（这里答的有点模糊了我）。


react的路由有几种模式：hash（hashchange） 和 history （replaceState、pushState）
项目主要用哪个路由模式
用的 hooks 多一点 还是 class 多一点？
自定义的hooks多吗？平时常用 hooks
比如说封装过哪些 hooks ？ ok，你可以写几个平时封装过的hooks吗？
useCallback 和 useMemo 用过吗？ 区别是？
useContext 哪个场景会用到它
redux全局的store， store是怎么跟react组件关联在一起的
项目的TS使用得多吗？
组件库会有一个像 modal 的这个组件，有没有想过如何实现一个通用的这个组件？功能比较简单一点，比如说有一个全局的蒙层，上面有一个居中的弹框，有一个关闭按钮，可以把弹窗和蒙层关闭掉，如果我想用react自己实现一个，应该怎么实现？
自己有对 webpack 了解吗？ webpack的整体流程
常用的loader 和 plugin 有哪些呢？
自定义一些插件，自己 有写过哪些插件呢
自定义的插件的流程
我看你写过自定义插件，它的作用是，解决了什么问题？
中间穿插几个项目问题，省略了。。。
ok，聊一下ES6的promise吧，它的静态方法的区别：all、race、allsettled、any
手写 promise.allsettled 的实现

css 中的水平居中的不同方式
css 中的伪类：before 与 after
html 中的 meta 标签是用来做什么的？
有做过 H5，移动端的页面吗？
media-query 用过吗？
用的 ES6 的语法吗？
promise 是什么意思？
后台拿数据是使用什么？原生的 ajax 对象了解吗？原生的 ajax 用 promise 封装一下要怎么做？
react 的版本，提到 componentWillReceiveProps
react 生命周期
react 的 context
redux 的架构，dispach 的是什么概念
git 常用命令，git rebase用过吗？


react 16 生命周期有什么改变
详细的介绍一下 getDerivedStateFromProps
你在项目中如何做性能优化的
flex: 0 1 auto; 是什么意思？
less 的 & 代表什么？
算法题：求最大公共前缀，如 ['aaafsd', 'aawwewer', 'aaddfff'] => 'aa'
interface 和 type 的区别
有用状态管理吗？
有用 ssr 吗？
node 熟悉吗？

介绍自己 为什么选前端

什么是深拷贝

js基本数据类型 和 引用数据类型

怎么判断是什么数据类型 怎么判断是否为数组

什么是原形链 如何创建一个函数 new 一个函数的时候发生了什么

什么是闭包 闭包的缺点 为什么会有内存溢出

防抖 节流 并写出任意一个

写代码： 有一个数组是 1-100 里的 98 个数字 无重复 无序 如何判断出缺少的两个元素是什么 用 index of 判断

vue 的生命周期

vue 的双向绑定 vue 的通信方式

vue3.0 有了解吗

css 盒模型

怎么画出一个三角形

ie 盒模型和 w3c 盒模型的区别 如何使用ie的盒模型

为什么选择 vue

es6 特性 let const var 区别


css 异步，js 同步，也可以设置js的defer或async属性将其改为异步。
304 状态码
http 缓存。js 缓存到哪里？
缓存存放的位置分为内存缓存和硬盘缓存。js 和图片等解析执行后存入内存缓存，css 存入硬盘缓存。
解构赋值
实现一个父元素里两个子元素，父元素宽度固定，子元素铺满父元素。
用 flex，设置子元素 flex-grow 和 flex-shrink 为 1。


CSS

盒模型
css文件中开头加*号/上下盒子重叠问题（为正值如何/负值如何）
伪类和伪元素的了解，伪类有什么作用
JS

原型链
继承
为什么3.tostring()会报错
var先使用会怎样
函数表达式和函数声明有什么区别
高阶函数了解过吗
对ES6新属性用过哪些
var 和function声明时的不同
class的用处
改写reduce函数
数组改写flat函数，怎么做到拉伸
数组将重复的元素进行输出
输入汉字的多少多少万转成数字
promise的api
三个promise完成之后怎么判断
把方法直接写到原型上有什么坏处
判断是对象上的方法还是原型上的方法
Vue

父子组件通信
vue指令中v-if/v-show的区别
vue的声明周期
jQuery

jQuery的api方法
jQuery做过动画没有
jQuery
取到某id下面所有的某个class
HTTP请求头

请求的时候怎么设置不缓存
编程题

spacify('hello world') // => 'h e l l o w o r l d'怎么转化
怎么实现这个'hello world'.spacify();


react 组件生命周期？
组件之间如何通信？我回答了 props 和 state，以及 react-redux
redux 是怎么进行工作的？
js 如何实现继承？
new 这个操作做了哪些事情？
js 的基本数据类型和引用数据类型分别有哪些？有什么区别？
怎么实现深拷贝？
有一个列表，实现点击某一个li标签，弹出元素内容（没答好）
什么是闭包？有什么优缺点？即特征是什么样子？
js 的垃圾回收机制
假设现在有一个数组，长度是 99 位，元素是 1-100 里边的值，数组是无序的也是不重复的，怎么快速的去找到这个数组和 1-100 相比缺的元素？（没答上来）
什么是稳定排序和不稳定排序？哪些排序是稳定的，哪些是不稳定的？
快排的思路，时间复杂度
css 的 position 有哪些属性值？分别是相对于谁定位的？
IE 盒模型和 W3C 盒模型有什么区别？css3 中要怎么设置？
用 css 画一个三角形（没答上来）
ES6 中的 let 和 const 与 var 的区别？
promise


class 组件与函数式组件的区别
css 优先级
避免 css 全局污染。
css modules 的原理
有一个 a 标签，如何动态的决定他的样式。
require 有什么性能问题
组件库如何做按需加载
webpack 如何实现动态加载
react 里有动态加载的 api 吗？
React.lazy 的原理是啥？
webpack 能动态加载 require 引入的模块吗？
require 引入的模块 webpack 能做 Tree Shaking 吗？
设计一个input 组件需要哪些属性。
value 的类型是什么？
onChange 怎么规定 value 的类型
interface 和 type 的区别
写一个 promise 重试函数，可以设置时间间隔和次数。function foo(fn, interval, times) {}

说一下 vue 的路由
项目默认是哪种模式
有什么区别
说一下 vue 的生命周期
说一下父子组件的生命周期？
子组件是什么时候创建的
说一下 keep-alive？用过吗？原理是什么？
组件通信的方式？
vuex 是如何实现的？实现的原理是什么？
为什么要有 mutation 和 action 呢？
eventbus 是怎么实现的？底层原理是什么？为什么可以实现不同组件之间状态的共享？
它们是什么模式？（订阅发布）
手写一下订阅发布
为什么会用到 apply 呢？手写一个 apply
说一下 apply、bind、call 的区别
computed 和 watch的区别
具体的区别有哪些呢？在操作方面呢？
vue 是怎么监听数组方法的呢？为什么能监听实现原生方法呢？
你们遇到这种问题怎么解决呢？（nextTick）
手写一个 vue 实现监听数组双向绑定的呢？原生方法？
项目打包用的什么？
webpack 了解吗
有什么常用的 loade 和 plugin
提到了 moment.js 的 plugin，解释一下这是什么
webpack 的编译顺序和方式是什么样的？
那么如果有两个 loader，都在这个 loader 的数组里，应该是从左往右还是从右往左编译呢？
自己写过 loader 和 plugin 吗？
提到了 ts-loader，写过 ts 吗？
说一下 ts 和 js 有什么区别？ts 有什么好处？介绍一下 ts？
对 ts 的类型系统有了解吗？
ES6 语法用过哪些？
promise 有哪些状态？
promise.all 和 race 有什么区别
手写一个方法，结合 all 和 race，所有都 resolved/reject 时才返回，并返回所有的结果

不定高的标签，在父元素中居中-
写一个 promise，怎么实现执行后面第二个 then 的第二个参数
reduce 方法，及参数还可以是什么，
sort 方法，返回类型可以返回布尔值吗
原生 js 添加事件，
map 和 foreach 的区别，map 返回的和原数组的长度一样吗
类数组对象转数组
创建 dom 节点
如何实现深拷贝
webpack 优化


实现一个 redux：实现 createStore 的功能，关键点发布订阅的功能，以及取消订阅的功能。

用 ts 实现一个 redux






