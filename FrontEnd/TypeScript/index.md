## [深入理解TypeScript](https://jkchao.github.io/typescript-book-chinese/#why)





####  编译上下文

`tsconfig.json`

```json
{
  "compilerOptions": {

    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件作为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 包含类型声明的文件列表
    "types": [],                           // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
  }
}
```

#### 声明空间

- 类型声明

```typescript

class Foo {}
interface Bar {}
type Bas = {}

// 作为类型注解使用
let foo:Foo;
let bar: Bar;
let bas: Bas;

```

- 变量声明

```typescript

class Foo {}
const someVar = Foo;
const someOtherVar = 123;

```

`class 声明既是类型声明 也是变量声明`



#### 模块
- 文件模块

```typescript
// foo.ts
export const foo = 123;

// bar.ts
import { foo } from '/foo';
const bar = foo;
```

- 模块系统类型
    - AMD: 仅可在浏览器使用
    - SystemJS: 实验性质, 但已经被ES模块替代
    - ES模块: Not Ready

In TypeScript, use commonjs and ES module

- ES模块语法
    - export
    ```typescript
    // export var/type
    export const someVar = 123;
    export type someType = {
        foo: string
    };
    ```


    const someVar = 123;
    type someType = {
        type: string;
    };
    export { someVar, someType };


    const someVar = 123;
    export { someVar as aDifferentName };
    
    ```
    
    - import
    ```typescript
    import { someVar, someType } from './foo'
    
    import { someVar as aDifferentName } from '/foo'
    
    import * as foo from '/foo';
    
    // only module input
    import 'core-js'
    
    // 从其他模块导入后整体导出
    export * from './foo';
    
    // 从其他模块导入后，部分导出
    export { someVar } from './foo';
    
    export { someVar as aDifferentName } from './foo';
    ```
    
    - 默认导入/导出
    ```typescript
    
    // some var
    export default (someVar = 123);
    
    // some func
    export default function someFunction() {}
    
    // some class
    export default class someClass {}
    
    ```

- 模块路径
    - 动态查找
    ```typescript

    // 当使用import * as foo from 'foo'，将会按如下顺序查找模块
    1. ./node_modules/foo
    2. ../node_modules/foo
    3. ../../node_modules/foo
    4. 直到系统的根目录

    ```

![module_place](img\module_place.PNG)



#### 命名空间

```javascript
// In JavaScript
(function(something) {
  something.foo = 123;
})(something || (something = {}));

console.log(something);
// { foo: 123 }

(function(something) {
  something.bar = 456;
})(something || (something = {}));

console.log(something); // { foo: 123, bar: 456 }
```

`use namespace in TypeScript` 

```typescript
// In TypeScript
namespace Utility {
  export function log(msg) {
    console.log(msg);
  }
  export function error(msg) {
    console.log(msg);
  }
}

// usage
Utility.log('Call me');
Utility.error('maybe');
    
    
// After compiled
(function (Utility) {
    // 添加属性至 Utility
})(Utility || Utility = {})
```





#### 基本注解

- 数组

  ```typescript
  let boolArray: boolean[];
  ```

  

- 接口

  ```typescript
  // 能合并众多类型声明至一个类型声明
  interface Name {
      // Here ALL props should not be missing
      first: string;
      second: string;
  }
  
  let name: Name;
  name = {
      first: 'A',
      second: 'B'
  }
  ```

- 内联类型注解

  ```typescript
  let name: {
    first: string;
    second: string;
  };
  
  name = {
    first: 'John',
    second: 'Doe'
  };
  
  name = {
    // Error: 'Second is missing'
    first: 'John'
  };
  
  name = {
    // Error: 'Second is the wrong type'
    first: 'John',
    second: 1337
  };
  ```

- 泛型

  ```typescript
  // 一种类型约束 用某个字符代替一种抽象类型, 从而实现控制输入类型和输出类型一致
  
  function reverse<T>(items: T[]): T[] {
    const toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
      toreturn.push(items[i]);
    }
    return toreturn;
  }
  
  const sample = [1, 2, 3];
  let reversed = reverse(sample);
  
  console.log(reversed); // 3, 2, 1
  
  // Safety
  reversed[0] = '1'; // Error
  reversed = ['1', '2']; // Error
  
  reversed[0] = 1; // ok
  reversed = [1, 2]; // ok
  
  /*
  函数 reverse 接收 一个类型 T (reverse<T> 中的类型参数) 的数组 (items: T[]), 返回值为类型 T 的一个数组 (T[]), 函数 reverse 的返回类型与它接受的参数类型一样。 当传入 const sample = [1,2,3]时, TypeScript 可以推断出 reverse 为 number[]类型,  从而实现类型安全
  */
  
  // 参考 JS 中 内置的 reverse 方法
  interface Array<T> {
      reverse(): T[];
  }
  ```

  

- 联合类型

  ```typescript
  // string | number
  function formatInputLine(command: string[] | string) {
      let line = '';
      if (typeof command === 'string') {
          line = command.trim();
      } else {
          line = command.join(' ').trim();
      }
  }
  ```

  

- 交叉类型

  ```typescript
  // eg: 从两个对象中创建一个新对象, 新对象拥有两个对象的所有功能
  function extend<T extends object, U extends object>(first: T, second: U): T & U {
    const result = <T & U>{};
    for (let id in first) {
      (<T>result)[id] = first[id];
    }
    for (let id in second) {
      if (!result.hasOwnProperty(id)) {
        (<U>result)[id] = second[id];
      }
    }
  
    return result;
  }
  
  const x = extend({ a: 'hello' }, { b: 42 });
  
  // 现在 x 拥有了 a 属性与 b 属性
  const a = x.a;
  const b = x.b;
  ```

- 元组类型

  ```typescript
  let nameNumber: [string, number];
  
  nameNumber = ['KKK', 555];
  
  // 解构使用
  const [name, num] = nameNumber;
  ```

  

- 类型别名

  ```typescript
  // 可以更方便语义化
  type strOrNum = string | number;
  
  // usage
  let sample: strOrNum;
  sample = 123;
  sample = '123'
  
  // others
  type Text = string | { text: string };
  type Coordinates = [number, number];
  type Callback = (data: string) => void;
  ```

  

- 声明文件

  `如果一个文件有扩展名 `.d.ts`，这意味着每个根级别的声明都必须以 `declare` 关键字作为前缀。这有利于让开发者清楚的知道，在这里 TypeScript 将不会把它编译成任何代码，同时开发者需要确保这些在编译时存在。`

#### 接口

```typescript
// 示例 A
declare const myPoint: { x: number; y: number };

// 示例 B
interface Point {
  x: number;
  y: number;
}
declare const myPoint: Point;
```



```typescript
// Lib a.d.ts
interface Point {
  x: number,
  y: number
}
declare const myPoint: Point

// Lib b.d.ts
interface Point { // overwrite
  z: number
}

// Your code
myPoint.z // Allowed!
```

- 类可以实现接口

  ```typescript
  interface Point {
      x: number;
      y: number;
  }
  
  class MyPoint implements Point {
      x: number;
      y: number;
  }
  
  // 基本上，在 implements（实现） 存在的情况下，该外部 Point 接口的任何更改都将导致代码库中的编译错误，因此可以轻松地使其保持同步
  
  interface Point {
    x: number;
    y: number;
    z: number; // New member
  }
  
  class MyPoint implements Point {
    // ERROR : missing member `z`
    x: number;
    y: number;
  }
  ```

  



#### 枚举

```typescript
enum CardSuit {
    Clubs,
    Diamonds,
    Hearts,
    Spades
}

let Card = CardSuit.Clubs;
```

- 数字类型标志

  ```typescript
  enum AnimalFlags {
    None        = 0,
    HasClaws    = 1 << 0,
    CanFly      = 1 << 1,
    EatsFish    = 1 << 2,
    Endangered  = 1 << 3,
  
    EndangeredFlyingClawedFishEating = HasClaws | CanFly | EatsFish | Endangered
  }
  ```

  

- 字符串枚举

  ```typescript
  export enum EvidenceTypeEnum {
    UNKNOWN = '',
    PASSPORT_VISA = 'passport_visa',
    PASSPORT = 'passport',
    SIGHTED_STUDENT_CARD = 'sighted_tertiary_edu_id',
    SIGHTED_KEYPASS_CARD = 'sighted_keypass_card',
    SIGHTED_PROOF_OF_AGE_CARD = 'sighted_proof_of_age_card'
  }
  ```



#### lib.d.ts

lib 分类

- javascript
  - es5
  - es6
  - es2015
  - es7
  - es2016
  - es2017
  - esnext
- 运行环境
  - dom
  - dom.iterable
  - webworker
  - scripthost
- ESNext 功能选项
  - es2015.core
  - es2015.collection
  - es2015.generator
  - es2015.iterable
  - es2015.promise
  - es2015.proxy
  - es2015.reflect
  - es2015.symbol
  - es2015.symbol.wellknown
  - es2016.array.include
  - es2017.object
  - es2017.sharedmemory
  - esnext.asynciterable

#### 函数

- 参数注解

  ```typescript
  // variable annotation
  let sampleVariable: { bar: number }
  
  // function parameter annotation
  function foo(sampleParameter: { bar: number }) {}
  ```

- 可选参数

  ```typescript
  function foo(bar: number, bas?: string): void {
      // ..
  }
  
  foo(123);
  foo(123, 'he')
  ```

- 重载

  ```typescript
  // 重载
  function padding(all: number);
  function padding(topAndBottom: number, leftAndRight: number);
  function padding(top: number, right: number, bottom: number, left: number);
  // Actual implementation that is a true representation of all the cases the function body needs to handle
  function padding(a: number, b?: number, c?: number, d?: number) {
    if (b === undefined && c === undefined && d === undefined) {
      b = c = d = a;
    } else if (c === undefined && d === undefined) {
      c = a;
      d = b;
    }
    return {
      top: a,
      right: b,
      bottom: c,
      left: d
    };
  }
  
  padding(1); // Okay: all
  padding(1, 1); // Okay: topAndBottom, leftAndRight
  padding(1, 1, 1, 1); // Okay: top, right, bottom, left
  
  padding(1, 1, 1); // Error: Not a part of the available overloads
  ```

  

- 函数声明

  ```typescript
  type LongHand = {
    (a: number): number;
  };
  
  type ShortHand = (a: number) => number;
  
  // 当需要使用重载时
  type LongHandAllowsOverloadDeclarations = {
      (a: number): number;
  	(a: string): string;
  }
  ```

  

#### 可调用的

- 可实例化

  ```typescript
  interface CallMeWithNewToGetString {
      new (): string;
  }
  
  // usage
  declare const Foo: CallMeWithNewToGetString;
  const bar = new Foo();
  ```

  

#### 类型断言

```typescript
interface Foo {
    bar: number;
    bas: string;
}

const foo = {} as Foo;
foo.bar = 123;
foo.bas = 'test';


// 断言有两种 as foo VS <foo>
let foo: any;
let bar = <string>foo; // bar 的类型是 'string'
// 避免和 JSX 的语法存在歧义, 通常用 as foo
```



- 双重断言

  ```typescript
  // eg
  function handler(event: Event) {
    const mouseEvent = event as MouseEvent;
  }
  
  function handler(event: Event) {
    const element = event as HTMLElement; // Error: 'Event' 和 'HTMLElement' 中的任何一个都不能赋值给另外一个
  }
  
  // 类型关联
  function handler(event: Event) {
    const element = (event as any) as HTMLElement; // ok
  }
  ```

  



`当 `S` 类型是 `T` 类型的子集，或者 `T` 类型是 `S` 类型的子集时，`S` 能被成功断言成 `T`。这是为了在进行类型断言时提供额外的安全性，完全毫无根据的断言是危险的，如果你想这么做，你可以使用 `any`。`



#### 允许额外属性

```typescript
// assume
interface State {
    foo?: string;
    bar?: string;
}

// 你可能想做
this.setState({ foo: 'Hello' }); // Yay works fine!

// 由于 Freshness，你也可以防止错别字
this.setState({ foos: 'Hello' }}; // Error: 对象只能指定已知属性

// 仍然会有类型检查
this.setState({ foo: 123 }}; // Error: 无法将 number 类型赋值给 string 类型
```

#### 类型保护

- instanceof

  ```typescript
  class Foo {
    foo = 123;
    common = '123';
  }
  
  class Bar {
    bar = 123;
    common = '123';
  }
  
  function doStuff(arg: Foo | Bar) {
    if (arg instanceof Foo) {
      console.log(arg.foo); // ok
      console.log(arg.bar); // Error
    }
    if (arg instanceof Bar) {
      console.log(arg.foo); // Error
      console.log(arg.bar); // ok
    }
  }
  
  doStuff(new Foo());
  doStuff(new Bar());
  ```

- in

  ```typescript
  interface A {
    x: number;
  }
  
  interface B {
    y: string;
  }
  
  function doStuff(q: A | B) {
    if ('x' in q) {
      // q: A
    } else {
      // q: B
    }
  }
  ```

  

- 字面量类型保护

  ```typescript
  type Foo = {
    kind: 'foo'; // 字面量类型
    foo: number;
  };
  
  type Bar = {
    kind: 'bar'; // 字面量类型
    bar: number;
  };
  
  function doStuff(arg: Foo | Bar) {
    if (arg.kind === 'foo') {
      console.log(arg.foo); // ok
      console.log(arg.bar); // Error
    } else {
      // 一定是 Bar
      console.log(arg.foo); // Error
      console.log(arg.bar); // ok
    }
  }
  ```

- 自定义类型保护

  ```typescript
  // 仅仅是一个 interface
  interface Foo {
    foo: number;
    common: string;
  }
  
  interface Bar {
    bar: number;
    common: string;
  }
  
  // 用户自己定义的类型保护！
  function isFoo(arg: Foo | Bar): arg is Foo {
    return (arg as Foo).foo !== undefined;
  }
  
  // 用户自己定义的类型保护使用用例：
  function doStuff(arg: Foo | Bar) {
    if (isFoo(arg)) {
      console.log(arg.foo); // ok
      console.log(arg.bar); // Error
    } else {
      console.log(arg.foo); // Error
      console.log(arg.bar); // ok
    }
  }
  
  doStuff({ foo: 123, common: '123' });
  doStuff({ bar: 123, common: '123' });
  ```

- 字面量类型

  ```typescript
  let foo: 'Hello';
  foo = 'Bar'; // Error: 'bar' 不能赋值给类型 'Hello'
  
  type CardinalDirection = 'North' | 'East' | 'South' | 'West';
  
  function move(distance: number, direction: CardinalDirection) {
      // ...
  }
  
  move(1, 'North'); // OK
  move(1, 'Nurth'); // Error
  ```

- 泛型

  ```typescript
  function reverse<T>(items: T[]): T[] {
    const toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
      toreturn.push(items[i]);
    }
    return toreturn;
  }
  
  const sample = [1, 2, 3];
  let reversed = reverse(sample);
  
  reversed[0] = '1'; // Error
  reversed = ['1', '2']; // Error
  
  reversed[0] = 1; // ok
  reversed = [1, 2]; // ok
  ```

- 类型推断

  ```typescript
  type Adder = (a: number, b: number) => number;
  function iTakeAnAdder(adder: Adder) {
    return adder(1, 2);
  }
  
  iTakeAnAdder((a, b) => {
    a = 'hello'; // Error: 不能把 'string' 类型赋值给 'number' 类型
    return a + b;
  });
  
  
  // 结构化
  const foo = {
      a: 123,
      b: 456
  };
  
  foo.a = 'hello';  // Error：不能把 'string' 类型赋值给 'number' 类型
  ```

  

- 结构化

  ```typescript
  interface Point2D {
    x: number;
    y: number;
  }
  
  interface Point3D {
    x: number;
    y: number;
    z: number;
  }
  
  const point2D: Point2D = { x: 0, y: 10 };
  const point3D: Point3D = { x: 0, y: 10, z: 20 };
  function iTakePoint2D(point: Point2D) {
    /* do something */
  }
  
  iTakePoint2D(point2D); // ok, 完全匹配
  iTakePoint2D(point3D); // 额外的信息，没关系
  iTakePoint2D({ x: 0 }); // Error: 没有 'y'
  ```

  

- 可选的和 rest 参数

  ```typescript
  let foo = (x: number, y: number) => {};
  let bar = (x?: number, y?: number) => {};
  let bas = (...args: number[]) => {};
  
  foo = bar = bas;
  bas = bar = foo;
  ```

- 类

  ```typescript
  // 仅仅只有实例成员和方法会相比较，构造函数和静态成员不会被检查。
  class Animal {
    feet: number;
    constructor(name: string, numFeet: number) {}
  }
  
  class Size {
    feet: number;
    constructor(meters: number) {}
  }
  
  let a: Animal;
  let s: Size;
  
  a = s; // OK
  s = a; // OK
  
  // 私有的和受保护的成员必须来自于相同的类。
  class Animal {
    protected feet: number;
  }
  class Cat extends Animal {}
  
  let animal: Animal;
  let cat: Cat;
  
  animal = cat; // ok
  cat = animal; // ok
  
  class Size {
    protected feet: number;
  }
  
  let size: Size;
  
  animal = size; // ERROR
  size = animal; // ERROR
  
  ```




#### JSX

- HTML标签

  ```jsx
  declare namespace JSX {
      interface IntrinsicElements {
          a: React.HTMLAttributes;
          abbr: React.HTMLAttributes;
      }
  }
  ```

- 函数式组件

  ```jsx
  type Props = {
      foo: string;
  }
  
  const MyComponent: React.FunctionComponent<Props> = props => {
      return <span>{props.foo}</span>;
  }
  
  <MyComponent foo="bar" />
  ```

  

- React JSX 接收组件实例

  ```jsx
  class MyAwesomeComponent extends React.Component {
      render() {
          return <div>Hello</div>
      }
  }
  
  const foo: React.ReactElement<MyAwesomeComponent                 
  ```

  