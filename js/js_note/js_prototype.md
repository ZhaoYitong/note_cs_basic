```javascript

// 原型的继承， 而不是改变构造函数的原型

function Admin() {}
Admin.prototype.__proto__ = User.prototype;
Admin.prototype.role = function() {
    console.log("admin.role");
};
```


```javascript

    function User() {}
    User.prototype.name = function() {
        console.log("user.name");
    }

    function Admin() {}
    
    Admin.prototype = Object.create(User.prototype);
    Admin.prototype.constructor = Admin;
    Admin.prototype.role = function() {
        console.log("admin.role");
    }

    console.log(Admin.prototype);

    let a = new Admin();
    let b = new a.__proto__.constructor();
    console.log(a.__proto__);
    console.log(a.prototype);


    // 当完整的把一个对象设置成了原型对象之后， 要保证原来的构造函数是存在的 (constructor)
```