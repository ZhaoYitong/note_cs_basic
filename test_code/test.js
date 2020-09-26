// function changeObjectProperty (o) {
//     o.siteUrl = 'http://www.baidu.com/';
//     o = new Object();
//     o.siteUrl = 'http://www.test.com/';
// }

// var csser = new Object();
// changeObjectProperty(csser);
// console.log(csser.siteUrl);

// var a = 6;

// setTimeout(() => {
//     console.log(a);

//     var a = 66;
// }, 1000);

// a = 666;

// console.log(a);

// Window.color = 'red';
// var o = {color: 'blue'};

// function sayColor() {
//     console.log(this.color);
// }

// sayColor();
// sayColor.call(this);
// sayColor.call(Window);
// sayColor.call(o);

// function foo() {
//     foo.a = function() {console.log(1)};
//     this.a = function() {console.log(2)};
//     a = function() {console.log(3)};
//     var a = function() {console.log(4)};
// }

// foo.prototype.a = function() {console.log(5)};
// foo.a = function(){console.log(6)};
// foo.a();
// var obj = new foo();
// obj.a();
// foo.a();

// function Parent(name, money) {
//     this.name = name + name;
//     this.money = money;
//     this.info = function() {
//         console.log(`name:${this.name} money:${this.money}`)
//     }
// }

// function Children(name, money) {
//     Parent.call(this, name); // inherit  name 
//     this.info = () => {
//         console.log(`name: ${this.name} will get money from parent`);
//     }
// }

// var per = new Parent('parent', 99999999);
// var chi = new Children('child', 5);
// per.info();
// chi.info();


// String.prototype.urlQueryString = function() {
//     var url = this.split('?')[1].split('&'),
//     len = url.length;

//     this.url = {};
//     for (let i = 0; i < len; i++) {
//         let cell = url[i].split('='),
//         key = cell[0],
//         val = cell[1];

//         this.url[key] = val;
//     }
//     return this.url;
// }

// var url = '?name=12&age=45&test=true';
// console.log(url.urlQueryString());

// var stringArr = ['This', 'is', 'Baidu', 'Campus'];
// console.log(stringArr.join(" "));


// function combo(msg) {
//     var arr = msg.split("-");
//     var len = arr.length;

//     for(var i=1; i<len; i++) {
//         arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].substr(1, arr[i].length - 1);
//     }
//     msg = arr.join("");
//     return msg;
// }

// console.log(combo("get-element-by-id"));



// function maxN(str) {
//     var json = {};

//     for (var i=0; i<str.length; i++) {
//         if (!json[str.charAt(i)]) {
//             json[str.charAt(i)] = 1;
//         } else {
//             json[str.charAt(i)] ++;
//         }
//     }

//     var index = '';
//     var num = 0;
    
//     for (var j in json) {
//         if (json[j] > num) {
//             num = json[j];
//             index = j
//         }
//     }

//     return {
//         index,
//         num,
//     }
// }

// console.log(maxN('fewfeafdsfweafvewafvew'));



// array to uniq
// Array.prototype.unique = function() {
//     var n = {}, r = [];
//     for (var i = 0; i < this.length; i++) {
//         if (!n[this[i]]) {
//             n[this[i]] = true;

//             r.push(this[i]);
//         }
//     }
//     return r;
// }

// let testArr = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'adf', 'aa', 'cc'];

// console.log(testArr.unique());



// Array.prototype.map2 = function(callback) {
//     for (var i = 0; i < this.length; i ++) {
//         this[i] = callback(this[i])
//     }
// }

// /**
//  * x + y + amount = 1 + 2 + 3 + ... + 100000
//  * 
//  * x + y = n
//  * 
//  */
// // x + y = n
// // x^2 + y^2 = 1

// for(let i=0;i<5;++i){
//     setTimeout(function(){
//     console.log(i+'');
//     },100*i);
// }


var xhr = null;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

xhr.open('method', 'address', 'tag');
xhr.setRequestHeader("", "")