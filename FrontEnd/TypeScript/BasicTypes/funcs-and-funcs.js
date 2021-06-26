"use strict";
exports.__esModule = true;
exports.createAdder = exports.arraryMutate = exports.printToFile = void 0;
function printToFile(text, callback) {
    console.log(text);
    callback();
}
exports.printToFile = printToFile;
function arraryMutate(numbers, mutate) {
    return numbers.map(mutate);
}
exports.arraryMutate = arraryMutate;
console.log(arraryMutate([1, 2, 3], function (v) { return v * 10; }));
// function currying
function createAdder(num) {
    return function (val) { return num + val; };
}
exports.createAdder = createAdder;
var addOne = createAdder(1);
console.log(addOne(2));
console.log(createAdder(2)(5));
