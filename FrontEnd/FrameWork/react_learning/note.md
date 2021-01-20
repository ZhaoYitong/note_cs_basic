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

**** Key 的设定方案需要明确


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

#### 高阶组件 HOC

```javascript

// 将不相关的 props 传递给被包裹的组件
//  不要在 render 中 使用 HOC ?????
render() {
  // 过滤掉非此 HOC 额外的 props，且不要进行透传
  const { extraProp, ...passThroughProps } = this.props;

  // 将 props 注入到被包装的组件中。
  // 通常为 state 的值或者实例方法。
  const injectedProp = someStateOrInstanceMethod;

  // 将 props 传递给被包装组件
  return (
    <WrappedComponent
      injectedProp={injectedProp}
      {...passThroughProps}
    />
  );
}
```

#### 第三方库
React 中 同一个组件可能会被渲染多次最好不要依赖ID


#### JSX
- React 必须在作用域内

```javascript
import React from 'react';
import CustomButton from './CustomButton';

function WarningButton() {
  // return React.createElement(CustomButton, {color: 'red'}, null);
  return <CustomButton color="red" />;
}

```

- 使用点语法
```javascript
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}

```

- 用户定义的组件必须以大写字母开头


- 在运行时选择类型

```javascript

import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // 正确！JSX 类型可以是大写字母开头的变量。
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}
```

- Props 默认值为 “True”

```javascript

<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />
```

- 属性展开
```javascript
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}
```

- 空格相关

`JSX 会移除行首尾的空格以及空行。与标签相邻的空行均会被删除，文本字符串之间的新行会被压缩为一个空格`


- 布尔类型、Null 以及 Undefined 将会忽略

`0 会被渲染`


#### 性能优化
- shouldComponentUpdate

```javascript
shouldComponentUpdate(nextProps, nextState) {
  return true; // set true or false, 重新渲染前触发
}
```

- React.PureComponent vs React.Component

React.Component 并未实现 shouldComponentUpdate()

React.PureComponent 中以浅层对比 prop 和 state 来实现


```javascript
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }


```

#### mixins

如果组件拥有多个 mixins，且这些 mixins 中定义了相同的生命周期方法（例如，当组件被销毁时，几个 mixins 都想要进行一些清理工作），那么这些生命周期方法都会被调用的。使用 mixins 时，mixins 会先按照定义时的顺序执行，最后调用组件上对应的方法。


#### Refs
使用场景
- 管理焦点，文本选择或媒体播放。
- 触发强制动画。
- 集成第三方 DOM 库。

`在 React单项数据流中，props是父子组件交互的唯一方式。要修改一个子组件，需要通过的新的props来重新渲染。
但是在某些情况下，需要在数据流之外强制修改子组件。被修改的子组件可能是一个React组件实例，也可能是一个DOM元素。对于这两种情况，React 都通过 Refs的使用提供了具体的解决方案`

```javascript
// Example
class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert( // use current
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file: {/*refs={this.fileInput}*/}
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(
  <FileInput />,
  document.getElementById('root')
);

```

#### PropTypes 类型检查
- 限制设置
```javascript
import PropTypes from 'prop-types';

MyComponent.propTypes = {
  // 你可以将属性声明为 JS 原生类型，默认情况下
  // 这些属性都是可选的。
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // 任何可被渲染的元素（包括数字、字符串、元素或数组）
  // (或 Fragment) 也包含这些类型。
  optionalNode: PropTypes.node,

  // 一个 React 元素。
  optionalElement: PropTypes.element,

  // 一个 React 元素类型（即，MyComponent）。
  optionalElementType: PropTypes.elementType,

  // 你也可以声明 prop 为类的实例，这里使用
  // JS 的 instanceof 操作符。
  optionalMessage: PropTypes.instanceOf(Message),

  // 你可以让你的 prop 只能是特定的值，指定它为
  // 枚举类型。
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // 一个对象可以是几种类型中的任意一个类型
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),

  // 可以指定一个数组由某一类型的元素组成
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // 可以指定一个对象由某一类型的值组成
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // 可以指定一个对象由特定的类型值组成
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),
  
  // An object with warnings on extra properties
  optionalObjectWithStrictShape: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number
  }),   

  // 你可以在任何 PropTypes 属性后面加上 `isRequired` ，确保
  // 这个 prop 没有被提供时，会打印警告信息。
  requiredFunc: PropTypes.func.isRequired,

  // 任意类型的数据
  requiredAny: PropTypes.any.isRequired,

  // 你可以指定一个自定义验证器。它在验证失败时应返回一个 Error 对象。
  // 请不要使用 `console.warn` 或抛出异常，因为这在 `onOfType` 中不会起作用。
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

  // 你也可以提供一个自定义的 `arrayOf` 或 `objectOf` 验证器。
  // 它应该在验证失败时返回一个 Error 对象。
  // 验证器将验证数组或对象中的每个值。验证器的前两个参数
  // 第一个是数组或对象本身
  // 第二个是他们当前的键。
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};

```

- defaultProps 指定默认值

```javascript
class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

// 指定 props 的默认值：
Greeting.defaultProps = {
  name: 'Stranger'
};

// 渲染出 "Hello, Stranger"：
ReactDOM.render(
  <Greeting />,
  document.getElementById('example')
);

```

- 限制单个元素
```javascript
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  render() {
    // 这必须只有一个元素，否则控制台会打印警告。
    const children = this.props.children;
    return (
      <div>
        {children}
      </div>
    );
  }
}

MyComponent.propTypes = {
  children: PropTypes.element.isRequired
};

```

#### React API
- createElement()

```javascript
// JSX after babel
React.createElement(
  type,
  [props],
  [...children]
)

```

- React.Fragment

```javascript
render() {
  return (
    <React.Fragment>
      test
      <h2>A head</h2>
    </React.Fragment>
  )
}


// Equals

render() {
  return (
    <>
      test
      <h2>A head</h2>
    </>
  )
}
```

- React.forwardRef

  - 转发 refs 到 DOM 组件
  - 高阶组件中转发 refs


```javascript
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;

```



#### DOM 元素

- style 样式

`样式不会自动补全前缀`
```javascript
const divStyle = {
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

function ComponentWithTransition() {
  return <div style={divStyle}>This should work cross-browser</div>;
}

```

#### 合成事件

包含各种 event

- 焦点进入与离开

```javascript

function Example() {
  return (
    <div
      tabIndex={1}
      onFocus={(e) => {
        if (e.currentTarget === e.target) {
          console.log('focused self');
        } else {
          console.log('focused child', e.target);
        }
        if (!e.currentTarget.contains(e.relatedTarget)) {
          // Not triggered when swapping focus between children
          console.log('focus entered self');
        }
      }}
      onBlur={(e) => {
        if (e.currentTarget === e.target) {
          console.log('unfocused self');
        } else {
          console.log('unfocused child', e.target);
        }
        if (!e.currentTarget.contains(e.relatedTarget)) {
          // Not triggered when swapping focus between children
          console.log('focus left self');
        }
      }}
    >
      <input id="1" />
      <input id="2" />
    </div>
  );
}
```

#### Test Utils
https://jestjs.io/docs/en/tutorial-react



#### HOOK
---- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。

`HOOK只能使用在function里, 可以继续保留 class 部分`
- useState

`use state`

```javascript
function ExampleWithManyStates() {
  // 声明多个 state 变量！
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...

  
  
  // 解构理解
  const [fruit, setFruit] = useState('banana');
  // equals
  var fruitStateVariable = useState('banana');
  var fruit = fruitStateVariable[0]; // First value in array
  var setFruit = fruitStateVariable[1]; // Second value in array

}

```

- hook vs class

```javascript
// Below we use useState
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0); /* 通过setCount 可以更改 count */

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// Equals

// Below we use class
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

```

- useEffect

`~ 给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 类似用途`

```javascript
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

- // React 在完成DOM更改后运行, 它可以访问 props 和 state
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => { // 这里处理销毁时 取消订阅
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

```

无需清除的 effect



- useContext


- useReducer


- 传递参数给事件处理器或回调
```jsx

<button onClick={() = > this.handleClick(id)} />

// equals

<button onclick={this.handleClick.bind(this, id)}>
```