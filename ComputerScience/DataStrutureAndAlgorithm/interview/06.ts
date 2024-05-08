// js bind apply

// @ts-ignore
Function.prototype.customBind = function (ctx, ...arg) {
    ctx = ctx || window

    ctx.fn = this

    return function() {
        let args = [...arg, ...arguments]
        ctx.fn(...args)
        delete ctx.fn
    }
}

// @ts-ignore
Function.prototype.myCall = function (ctx, ...arg) {
    ctx = ctx || window

    ctx.fn = this

    ctx.fn(...arg)

    delete ctx.fn
}

// @ts-ignore
Function.prototype.myApply = function(ctx, arg) {
    ctx = ctx || window
    
    ctx.fn = this
    
    ctx.fn(...arg)

    delete ctx.fn
}

let a = 11
let b = 22

function test() {
    console.log(this.a, this.b, ...arguments)
}

// @ts-ignore
let mb = test.customBind({
    a: 5,
    b: 8
}, 1)

mb(123)