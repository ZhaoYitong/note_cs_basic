class RequestController {
    constructor(maxConcurrentRequests = 6, timeoutThreshold = 1000) {
      this.queue = [];
      this.activeRequests = 0;
      this.maxConcurrentRequests = maxConcurrentRequests;
      this.timeoutThreshold = timeoutThreshold;
    }
  
    async makeRequest(requestFunc) {
      if (this.activeRequests >= this.maxConcurrentRequests) {
        return new Promise((resolve, reject) => {
          this.queue.push({ requestFunc, resolve, reject });
        });
      }
  
      this.activeRequests++;
  
      const requestPromise = requestFunc();
  
      const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => resolve('timeout'), this.timeoutThreshold);
      });
  
      try {
        const result = await Promise.race([requestPromise, timeoutPromise]);
        if (result === 'timeout') {
          throw new Error('Request timeout');
        }
        return result;
      } finally {
        this.activeRequests--;
  
        if (this.queue.length > 0) {
          const { requestFunc, resolve, reject } = this.queue.shift();
          this.makeRequest(requestFunc)
            .then(resolve)
            .catch(reject);
        }
      }
    }
  }
  

const controller = new RequestController(6, 1000);

async function simulateRequest(ms) {
  await new Promise(resolve => setTimeout(resolve, ms));
  return `Response after ${ms}ms`;
}

for (let i = 0; i < 10; i++) {
  controller.makeRequest(() => simulateRequest(800))
    .then(response => console.log(response))
    .catch(error => console.error(error));
}

