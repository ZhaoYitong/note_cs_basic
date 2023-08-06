/*
var obj = {
    a: 1,
    b: 2,
    c: 3
};

with(obj) {
    a = 3;
    b = 4;
    c = 5;
}

console.log(obj);
*/

/*
function foo(obj) {
    with (obj) {
        a = 2;
    }
}


var o1 = {
    a: 3
}

var o2 = {
    b: 3
}

foo(o1);
console.log(o1.a);

foo(o2);
console.log(o2.a);
console.log(a);
*/


/*
function foo () {
    function bar (a) {
        i = 3; 
        console.log(a + i);
    }

    for (var i=0; i<10; i++) {
        bar(i*2);
    }
}

foo();
*/
/*
try {
    undefined();
}
catch (err1) {
    console.log(err1);
}
*/
/*
a = 2;

var a;

console.log(a);
*/
/************/

// function getName() {
//     for(let i=0; i<5; i++) {
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }

//     return {name: 'ddd'};
// }

// console.log(getName());

// var person = {
//     name: 'Brendan',
//     hello: function(thing) {
//         console.log(this + " say " + thing)
//     }
// }

// person.hello("world")

// person.hello.call(person, "world")

