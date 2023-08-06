function addWithCb(x, y, callback) {
    console.log([x, y]);
    callback === null || callback === void 0 ? void 0 : callback();
}
