- 书籍资料
  - 深入浅出 Node.js -- 偏重理论-
  - Node.js 权威指南 -- api
  - Node入门   nodebeginner.org



1.  使用 require 方法加载 fs 核心模块
2. 读取文件



`http module`

```java
server.on('request', function(request, response) {
    // http://127.0.0.1/
    
    
    console.log("request received, the path is: ", request.url);
    
})
```

返回字符的编码格式：

除了请求头， Content-type 可以用来指 定编码， 也可以在 HTML 中通过

```html
<meta charset="UTF-8">
```

声明当前文本的编码格式



### node 使用 模板引擎 -- art-template

```bash
npm install art-template
```

- example

  ```js
  var ret = template.render('hello {{ name }}', {
      name: 'Jack'
  })
  ```



#### browser 解析 node 发送的 html

当发现 `link`, `script`, `img`, `iframe`, `video`, `audio` 等具有 src 或 link 的 href 属性时， brower will request these resource automatically
      

#### url parse

```javascript

    var url = require('url');

    var obj = url.parse('https://www.bilibili.com/account/history?spm_id_from=333.337.b_696e7465726e6174696f6e616c486561646572.33', true);

    var pathName = obj.pathname
```



###  一次请求对应一次响应

#### 如何通过服务器让客户端重定向

+ 状态码设置为 302 临时重定向  `statusCode`

+ 响应头中通过 Location 告诉客户端向哪重定向 `setHeader`

+ 若客户端发现收到服务器的响应状态码是 302 则会自动从响应头找 Location， 后客户端会自动跳转

  ```javascript
  	let res;
  	res.statusCode = 302
  	res.setHeader('Location', '/')
  
  	// res.setHeader('Location', 'http://127.0.0.1:3000')
  ```



+ header('location')
  * 301 永久重定向 浏览器会记住
    * a.com    b.com
    * a  浏览器不会请求 a 
    * 直接跳到 b 
  * 302 临时重定向 浏览器不记忆
    * a.com    b.com
    * a.com    还会请求 a
    * a 告诉浏览器跳转到 b



#### REPL

	+ read
	+ eval
	+ print
	+ loop

在 terminal 中 



### 软件开发版本

+ x.x.x
  * 0.0.1
  * 0.0.2
  * 1.1.5
  * 2（新增功能比较多， 甚至可能去除了某些功能）.5 (加入了新功能).0(fix bug, 提升性能)



#### CommonJS 模块规范

在 Node 中的 JavaScript 之 模块系统

- 模块作用域
- 使用 require 方法来加载模块
- 使用 exports 接口对象来导出模块中的成员

##### 加载 `require`

```javascript
var 自定义变量名称 = require('模块')
```



##### 导出 exports

- Node 中是模块作用域，默认文件中所有的成员只在当前模块有效
- 对于希望被其他模块访问的成员， 需要把这些公开成员挂载到 `exports`接口对象中

导出多个成员 (必须在对象中)

```javascript
exports.a = 123
exports.b = 'hhh'
exports.c = function(){
    console.log('ddd')
}
exports.d = {
    foo: 'bar'
}

// another
module.exports = {
    add: function() {
        return x + y;
    },
    str: 'hello'
}
```



导出单个成员(拿到 function, string)

```javascript
module.exports = 'hello'

// 以下会覆盖以上
module.exports = function(x, y) {
    console.log(x + y)
}
```





每个文件模块

```javascript
// var module = {
//	exports: {

//}
}

```

#### 原理解析

exports 和 `module.exports`的一个引用

```javascript
console.log(exports === module.exports) //

exports.foo = 'bar'

// equals
module.exports.foo = 'bar'

/*****/
// 最后 return 的是 module.exports

```



`引用`

example_1

```javascript
var obj = {}
var obj1 = obj; // obj1 与 obj 共同指向一个值

obj1.foo = 'bar'

obj.foo = 'hello'

obj1 = {}  // obj1指向其他, 但 obj 的指向不变
obj1.foo = 'world'

console.log(obj.foo) // 输出 hello 


```



example_2

```javascript
// {foo: bar}
expors.foo = 'bar'

// {foo: bar, a: 123}
module.exports.a = 123

// exports !== module.exports
expors = {
    a: 456
}

// {foo: 'haha', a: 123}
module.exports.foo = 'haha'

exports.c = 456

// rebuild the connection between `exports` and `module.exports`
exports = module.exports

// reference is built, the result is {foo: 'haha', a}
exports.a = 789
```

[exports、module.exports AND export、export default](https://segmentfault.com/a/1190000010426778)



`USE`

```javascript
export more members: exports.xxx = xxx

					 module.exports = {
                         
                     }
export one member: module.exports
```





- jQuery 的 each 和 JavaScript 的 forEach

  - jQuery 的实例对象不能使用 forEach 方法， 若要使用必须转为数组

    `[].slice.call(jQuery实例对象)`

  ```javascript
  // prototype 属性使你有能力向对象添加属性和方法
  Array.prototype.mySlice = function () {
      var start = 0
      var end = this.length
      if (arguments.length === 1) {
          start = arguments[0]
      } else if (arguments.length === 2) {
          start = arguments[0]
          end = arguments[1]
      }
      var tmp = []
      for (var i=start; i<end; i++) {
          tmp.push(this[i])
      }
      return tmp
  }
  
  var fakeArr = {
      0: 'abc',
      1: 'efg',
      2: 'haha',
      length: 3
  }
  
  [].mySlice.call(fakeArr)
  ```





#### require 加载规则

- 优先从缓存加载

  ```javascript
  // main.js
  require('./a')
  var fn = require('./b')
  console.log(fn)
  
  // a.js
  console.log('a.js is load')
  var fn = require('./b')
  console.log(fn)
  
  // b.js
  console.log('b.js is load')
  
  module.exports = function() {
      console.log('hello bbb')
  }
  
  /************************/
  // 优先从缓存加载 ！！！！！！
  // 由于 在 a 中已经加载过，所以 main.js 中的 b.js 不会重复加载
  ```

- 判断模块标识

  `https://www.bilibili.com/video/av27670326?p=43`





```javascript
// 如果是非路径形式的模块标识
// 路径形式的模块
// ./
// ../
// /xxx 几乎不用 
// 首位的 / 表示当前文件模块所属磁盘根路径
// 
// `./xxx`
// `../xxx`
// `/xxx` / 在这里表示的是磁盘根路径

require('foo.js')
```



#### 第三方模块

```javascript
node_modules
node_modules/express
node_modules/express/package.json
node_modules/express/package.json main
如果 package.json 或 package.json main 不成立， 则查找备选项 index.js

如果以上条件都不成立，则继续进入上一级目录中的 node_modules 按照上面的规则继续查找

如果知道当前文件模块所属磁盘根目录都找不到，最后报错：`can not find module xxx`
```



#### package.json 包描述文件

```javascript
即产品的说明书
dependencies 属性， 用来保存项目的第三方包依赖项信息
所以建议每个项目都要且只有一个 package.json (存放在项目的根目录)
可通过 `npm init [--yes]`
为了保存依赖信息，每次安装第三方包的时候都要加上： `--save` 选项
```



#### 模块标识 路径问题

```javascript
var fs = require('fs')

// 文件操作中的相对路径可以省略 ./
fs.readFile('data/a.txt', function (err, data) {
    if (err) {
		return console.log('read failed')
    }
    console.log(data.toString())
})

// 在模块加载中，相对路径中的 ./不能省略
// Error: Cannot find module 'data/foo.js'
// require('data/foo.js')

require('./data/foo.js')('hello')

**** 
    ./data/a.txt 相对于当前目录
    data/a.txt   相对于当前目录
    /data/a.txt  绝对路径, 当前文件模块所处磁盘根目录
	c:/xx/xx...  绝对路径
```



#### router

```javascript
var express = require('express')
var router = require('./router')


/** router.js **/
module.exports = function (app) {
    app.get()
}
```



#### 编写步骤

- 处理模板
- 静态资源开放
- 配置模板引擎
- 路由
- 路由设计
- 提取路由模块
- 业务逻辑封装
- 实现具体功能



#### 回调

````javascript
function add (x, y, callback) {
    console.log(1)
    
    setTimeout(function () {
        var ret = x + y
        callback(ret)
    }, 1000)
}

add(10, 20, function(ret) {
    console.log(ret)
})
````



#### ajax 封装

```javascript
var oReq = new XMLHttpRequest()

oReq.onload = function () {
    console.log(oReq.responseText)
}
oReq.open('get', 'data.json', true)
oReq.send()
```



#### 模块化相关

javascript 天生不支持模块化

CommonJS、AMD、CMD、 UMD、 EcmaScript 6 Modules

less 编译器 > css

EcmaScript 6 -> 编译器 -> EcmaScript 5





#### package.json

- 建议每个项目的根目录下都有一个package.json文件
- 建议执行 `npm install 包名` 的时候都加上 `--save` 选项， 目的是保存依赖信息
- 当安装包的时候，会自动创建或者更新 `package-lock.json`文件
- `package-lock.json` 这个文件会保存 `node_modules`中所有包的信息(版本、下载地址)
  - 重新执行 `npm install` 速度会提升
- `lock`代表版本锁
  - 如果项目依赖了 `1.1.1`版本
  - 重新install 会下载最新版本，而不是1.1.1
  - lock 方便锁定版本号，而不是自动升级



#### find && findIndex

```javascript
var users = [
    {id: 1, name: 'dd'},
    {id: 2, name: 'dd'},
    {id: 3, name: 'dd'},
    {id: 4, name: 'dd'},
]

Array.prototype.myFind = (conditionFunc) => {
	for(var i = 0; i< this.length; i++) {
        if(conditionFunc(this[i], i)) {
            return this[i]
        }
    }
}

var result = users.myFind(function(item, index) {
    return item.id === 4
}) // {id: 4, name: 'dd'}

```


AMD 与 commonJS 模块化规范
#### AMD
浏览器异步解析模块

```javascript

// index.js
require([])
```

- 同一个模块无论加载多少次，结果只能执行一次


#### ESModule
兼容 AMD 与 CommonJs


打包 --> 抹平模块化差异

babel 
