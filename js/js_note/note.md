#### LHS & RHS

作用域是一套规则，用于确定在何处以及如何查找变量(标识符)。如果查找的目的是对变量赋值，那么会使用`LHS`查询; 如果目的是获取变量的值，则会使用`RHS`查询。



赋值操作符会导致 `LHS`查询。 `=`	操作符或调用函数时传入参数的操作都会导致关联作用域的赋值操作。



### with & eval -- "欺骗" 词法作用域

with 可以将一个或有多个属性的对象处理为一个完全隔离的词法作用域



```javascript
function foo(obj) {
    with (obj) {
        a = 2;
    }
}


var o1 = {
    a: 3
}

var o2 = {
    b: 3
}

foo(o1);
console.log(o1.a);

foo(o2);
console.log(o2.a);
console.log(a);
```



控制台输出

```bash
2
undefined
2  
```



`尽管 with 块可以将一个对象处理为词法作用域，但是这个块内部正常的 var 声明并不会被限制在这个块的作用域中，而是被添加到 with 所处的函数作 用域中。`



+ 本质

  JavaScript 中有两个机制可以“欺骗”词法作用域：eval(..) 和 with。前者可以对一段包 含一个或多个声明的“代码”字符串进行演算，并借此来修改已经存在的词法作用域（在 运行时）。后者本质上是通过将一个对象的引用当作作用域来处理，将对象的属性当作作 用域中的标识符来处理，从而创建了一个新的词法作用域（同样是在运行时）。







### 函数表达式 & 标准的函数声明

```javascript
// 函数表达式
(function foo(){
    var a = 3;
    console.log(a);
})();

console.log(a);

// 标准的函数声明
function foo() {
    var a = 3;
    console.log(a);
}
```

`函数表达式可以匿名，函数声明不可以省略函数名`

#### defect of anonymous function

1. 匿名函数在栈追踪中不会显示出有意义的函数名，使得调试很困难。
2. 如果没有函数名，当函数需要引用自身时只能使用已经过期的 arguments.callee 引用， 比如在递归中。另一个函数需要引用自身的例子，是在事件触发后事件监听器需要解绑自身。
3. 匿名函数省略了对于代码可读性 / 可理解性很重要的函数名。一个描述性的名称可以让 代码不言自明。

`行内函数表达式非常强大且有用——匿名和具名之间的区别并不会对这点有任何影响。给函 数表达式指定一个函数名可以有效解决以上问题。始终给函数表达式命名是一个最佳实践：`

```javascript
	setTimeout( function timeoutHandler() {
        console.log('kkkk')
    }, 1000)
```





#### IIFE (Immediately Invoked Function Expression)

`立即执行表达式`

```javascript
var a = 2;

(function foo() { // IIFE start
    var a = 3;
    console.log(a); 
})(); // IIFE end

console.log(a)
```

##### equals

```javascript
(function(){ .. }())
```







#### 重新绑定

```javascript
{
    let j;
    for(j=0; j<10; j++) {
        let i = j;
        console.log(i)
    }
}
```



#### hoist

```javascript
a = 2;

var a;

console.log(a);
```



`example`

```javascript
foo();

function foo() {
    console.log(a); // undefined
    var a = 2;
}

// equals

function foo() {
    var a;
    
    console.log(a); // undefined
    
    a = 2;
}

foo();

```





`example1`

```javascript
foo(); // TypeError
bar(); // ReferenceError

var foo = function bar() {
	// ...
}

/* after hoist */

var foo;
foo(); // TypeError
bar(); // ReferenceError

foo = function() {
    var bar = ...self...
    // ...
}
```



##### 函数优先

函数声明和变量声明都会被提升。但是一个值得注意的细节（这个细节可以出现在有多个 “重复”声明的代码中）是函数会首先被提升，然后才是变量。


```javascript

foo();

var foo;

function foo() {
    console.log(1);
}

foo = function() {
    console.log(2);
}


// after engine

function foo() {
    console.log(1);
}

foo(); // 1

foo = function() {
    console.log(2);
}
```



#### 理解闭包

```javascript

    function foo() {
        var a = 2;

        function bar() {
            console.log(a);
        }

        return bar;
    }

    var baz = foo();

    baz(); // 2

    ////////////////////

    function foo() {
        var a = 2;

        function baz() {
            console.log( a );
        }

        bar( baz );
    }

    function bar(fn) {
        fn();
    }
```



#### 模块

模块模式必要条件
1. 必须有外部的封闭函数, 该函数必须至少被调用一次 (每次调用都会创建一个新的模块实例)

2. 封闭函数必须返回至少一个内部函数, 这样内部函数才能在私有作用域中形成闭包, 并且可以访问或者修改私有的状态