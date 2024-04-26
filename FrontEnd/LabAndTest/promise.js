class Scheduler {
    constructor() {
        this.queue = [];
        this.max = 3;
        this.runCounts = 0;
        this.results = []
    }
    add(promiseRequest) {
        this.queue.push(promiseRequest);
    }
    taskStart() {
        for (let i = 0; i < this.max; i++) {
            this.request();
        }
    }
    request() {
        if (!this.queue || !this.queue.length || this.runCounts >= this.max) {
            return;
        }
        this.runCounts++;
        this.queue
            .shift()()
            .then((res) => {
                this.results.push(res)
                this.runCounts--;
                this.request();
            });
    }

    getAllResults() {
        return this.results
    }
}

const scheduler = new Scheduler();

const addTask = (time, order) => {
    scheduler.add(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(time);
            }, time);
        })
    });
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");

scheduler.taskStart().then(() => {

    const allResults = scheduler.getAllResults()
    console.log(allResults)
});


