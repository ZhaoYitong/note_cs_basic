"use strict";
exports.__esModule = true;
exports.getObjectProps = exports.fetchData = exports.argFunc = void 0;
var argFunc = function (text) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(text + " " + names.join(','));
};
exports.argFunc = argFunc;
var fetchData = function (url) {
    return Promise.resolve('result');
};
exports.fetchData = fetchData;
var getObjectProps = function (user) {
    var _a, _b;
    return "The name is " + ((_a = user === null || user === void 0 ? void 0 : user.name) !== null && _a !== void 0 ? _a : 'DefaultName') + ", and the age is " + ((_b = user === null || user === void 0 ? void 0 : user.age) !== null && _b !== void 0 ? _b : 'DefaultAge');
};
exports.getObjectProps = getObjectProps;
var test = 'a';
exports["default"] = test;
