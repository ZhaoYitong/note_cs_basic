#### 无原型对象
```javascript
let xj = { name: '向军'};

console.log(xj);

console.log(xj.hasOwnProperty("name"));

// 完全数据字典对象

let hd = Object.create(null, {
    name: {
        value: '后盾人'
    }
});

console.log(hd.hasOwnProperty("name"));
```