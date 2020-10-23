function Foo(who) {
    this.me = who;
}

Foo.prototype.identity = function() {
    return `I am ${this.me}`;
}

function Bar(who) {
    Foo.call(this, who);
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function() {
    console.log(`Hello, ${this.identity()}.`);
}

var b1 = new Bar(`b1`);
var b2 = new Bar(`b2`);

b1.speak();
b2.speak();