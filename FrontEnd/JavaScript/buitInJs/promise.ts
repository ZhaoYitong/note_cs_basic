const test = Promise.resolve(() => { console.log('ddd')});
const b = test.then((res) => {
    res()
});
const dc = test.then().then().then().then((f) => f())


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
    console.log('First function');
    return 'First function';
});
console.log(interceptor)

interceptor.run().then((finalResult) => {
    console.log('Final result - First function:', finalResult);
});

// 添加第二个拦截器函数
interceptor.use((prevResult: any) => {
    console.log('Second function, previous result:', prevResult);
    return 'Second function';
});

// 添加第三个拦截器函数
interceptor.use((prevResult: any) => {
    console.log('Third function, previous result:', prevResult);
    return 'Third function';
});

// interceptor.actions

// 执行拦截器链
interceptor.run().then((finalResult) => {
    console.log('Final result:', finalResult);
});

/////////////////////////////////////////////////////////////////

class MyPromise {
    status: string;
    value: any;
    reason: any;
    onResolveCallbacks: any[];
    onRejectCallbacks: any[];

    constructor(executor) {
      this.status = 'pending';
      this.value = undefined;
      this.reason = undefined;
      this.onResolveCallbacks = [];
      this.onRejectCallbacks = [];
  
      const resolve = (value) => {
        if (this.status === 'pending') {
          this.status = 'fulfilled';
          this.value = value;
          this.onResolveCallbacks.forEach((callback) => callback(this.value));
        }
      };
  
      const reject = (reason) => {
        if (this.status === 'pending') {
          this.status = 'rejected';
          this.reason = reason;
          this.onRejectCallbacks.forEach((callback) => callback(this.reason));
        }
      };
  
      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }
  
    then(onResolve, onReject) {
      const promise = new MyPromise((resolve, reject) => {
        const handleResolve = (value) => {
          try {
            const result = onResolve(value);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        };
  
        const handleReject = (reason) => {
          try {
            const result = onReject(reason);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        };
  
        if (this.status === 'fulfilled') {
          handleResolve(this.value);
        } else if (this.status === 'rejected') {
          handleReject(this.reason);
        } else {
          this.onResolveCallbacks.push(handleResolve);
          this.onRejectCallbacks.push(handleReject);
        }
      });
  
      return promise;
    }
  
    catch(onReject) {
      return this.then(undefined, onReject);
    }
  
    static resolve(value) {
      return new MyPromise((resolve) => {
        resolve(value);
      });
    }
  
    static reject(reason) {
      return new MyPromise((_, reject) => {
        reject(reason);
      });
    }
  
    static all(promises) {
      return new MyPromise((resolve, reject) => {
        const results: number[] = [];
        let resolvedCount = 0;
  
        for (let i = 0; i < promises.length; i++) {
          promises[i].then((value) => {
            results[i] = value;
            resolvedCount++;
  
            if (resolvedCount === promises.length) {
              resolve(results);
            }
          }, reject);
        }
      });
    }
  }
  


