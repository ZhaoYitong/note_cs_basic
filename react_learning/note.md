计时器  挂载  mount

清除计时器 卸载  unmount

组件被传给 ReactDOM.render() 时, React 会调用组件的构造函数
初始化 this.state  
组件从 DOM 移除 React 会自动调用 componentWillUnmount()


React 需要显式的使用 preventDefault 阻止默认行为， return false 无效

```javascript

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        
    }

    return (
        <a href="#" onClick="{handleClick}">

        </a>
    )
}

```

#### 理解 .bind(this)

```javascript


var myObj = {

    specialFunction: function () {

    },

    anotherSpecialFunction: function () {

    },

    getAsyncData: function (cb) {
        cb();
    },

    render: function () {
        var that = this; //
        this.getAsyncData(function () {
            that.specialFunction(); // use that, not this
            that.anotherSpecialFunction(); // use that, not this
        });
    }
};

myObj.render();

```

```javascript

Function.prototype.bind = function (scope) {
    var fn = this;
    return function () {
        return fn.apply(scope)
    }
}
```

理解 Array.from



```html

<button onClick={(e) => this.deleteRow(id, e)}> Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>


<!-- 在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。 -->

```


react 的条件渲染还是通过 props 控制, 由组件內部的 if 逻辑

```javascript
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);

```


JSX中可以嵌入表达式


让组件不渲染  ==> return null;


#### render more components
原理即数组遍历`map`产生新数组

```javascript
const numbers = [1, 2, 3, 4];
const listItems = numbers.map(number) => <li>{number}</li>


ReactDOM.render(
    <ul>{listItems}</ul>
    document.getElementById('root')
);
```

列表 & key
key 会传递信息给React, 但不会传递给组件, 如果组件中需要key的值, 需要用其他属性显示传递该值


```javascript
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "You can set initial value here"
    }
  }

  handleChangeChartType = e => {
    this.setState({ chartType: e.target.value})
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return {
      <form onSubmit=""></form>
    }
  }
}

```

##### ES6 Computed property names
```javascript

let i = 0;
let a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i
}

console.log(a); // { foo1: 1, foo2: 2}

////////////////////////////////////
const items = ['a', 'b', 'c'];
const obj = {
  [items]: "hello"
}
console.log(obj); // a,b,c: "hello"

///////////////////////////////////
let param = 'size'
let config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
}

console.log(config) // {size: 12, mobileSize: 4}
```

#### 状态提升
将多个组件中需共享的state向上移动到它们最近共同父组件中, 即可实现共享 state

```javascript

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature; // use props
    const scale = this.props.scale; // use props
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

```
#### 组合关系

```javascript

function FancyBorder(props) {
  return (
    <div className={`Fancy${props.color}`}>
      {props.children}
    </div>
  )
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

// 以上是内嵌

```

- 另一种组合: 左右
```javascript

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  )
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      }
    />
  )
}
```

`React中基本是用组合的方式实现所谓的组件扩展或者继承`

#### state vs props
props 是传递给组件的(类似函数形参), state是组件内被组件自己管理的(类似在一个函数内声明的变量)


#### 数据是否属于 state
通过问自己以下三个问题，你可以逐个检查相应数据是否属于 state：

- 该数据是否是由父组件通过 props 传递而来的？如果是，那它应该不是 state。
- 该数据是否随时间的推移而保持不变？如果是，那它应该也不是 state。
- 你能否根据其他 state 或 props 计算出该数据的值？如果是，那它也不是 state。

#### 双向绑定
通过一个触发State改变的callback function 去更新应用


#### 解释性注释
React 中 for -> htmlFor


#### 错误边界
- 过渡loading
fallback属性

```javascript

import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </div>
  );
}

```

- 备用UI渲染
```javascript
/*
如果一个 class 组件中定义了 static getDerivedStateFromError() 或 componentDidCatch() 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。当抛出错误后，请使用 static getDerivedStateFromError() 渲染备用 UI ，使用 componentDidCatch() 打印错误信息。
*/

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```

#### context 
避免中间过多props传递, 类似上下文内共享变量

```javascript

const MyContext = React.createContext(defaultValue);


// Context.Provider
<MyContext.Provider value={}>

```

#### 错误边界
捕获并打印发生在其子组件树任何位置的javascript错误, 并渲染出备用UI

#### Refs转发 
????

#### Fragments

```javascript
// map需要key属性
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>Hellokkk</td>
      </React.Fragment>
    )
  }
}

// 使用短语法(不支持 key 属性)
class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}


```