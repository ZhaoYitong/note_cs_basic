const test = Promise.resolve(() => {
  console.log("ddd");
});
const b = test.then((res) => {
  res();
});
const dc = test
  .then()
  .then()
  .then()
  .then((f) => f());

class Interceptor {
  actions: Promise<any>;
  constructor() {
    this.actions = Promise.resolve();
  }

  use(func: any) {
    this.actions = this.actions.then(func);
  }

  run() {
    return this.actions;
  }
}

const interceptor = new Interceptor();

// 添加第一个拦截器函数
interceptor.use(() => {
  console.log("First function");
  return "First function";
});
console.log(interceptor);

interceptor.run().then((finalResult) => {
  console.log("Final result - First function:", finalResult);
});

// 添加第二个拦截器函数
interceptor.use((prevResult: any) => {
  console.log("Second function, previous result:", prevResult);
  return "Second function";
});

// 添加第三个拦截器函数
interceptor.use((prevResult: any) => {
  console.log("Third function, previous result:", prevResult);
  return "Third function";
});

// interceptor.actions

// 执行拦截器链
interceptor.run().then((finalResult) => {
  console.log("Final result:", finalResult);
});

/////////////////////////////////////////////////////////////////

const testFn = () => {
  if (1) {
    console.log(1)
    setTimeout(() => {
      console.log(2)
    }, 2);
    console.log(3)
  }
}

testFn()
