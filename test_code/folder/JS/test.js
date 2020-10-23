/**
 * 变量提升 与 函数提升
 */
function Foo() {
    getName = function () {console.log(1);}
    return this;
}

Foo.getName = function (){console.log(2);};

Foo.prototype.getName = function () {console.log(3);}

var getName = function () {console.log(4);}

function getName() {console.log(5);}

/**** after hoisting */
// 遇到 function 会整体提升
// function Foo() {
//     getName = function () {
//         console.log(1);
//     }
// }
// // 遇到变量会提升，但变量值不会动
// var getName;
// function getName() {console.log(5);}

Foo.getName(); // 2
getName();  // 5
Foo().getName(); // 
getName(); // 5
new Foo.getName();
new Foo().getName();
new new Foo().getName()

// ???