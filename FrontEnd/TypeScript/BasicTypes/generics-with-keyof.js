function pluck(items, key) {
    return items.map(function (item) { return item[key]; });
}
var dogs = [
    {
        name: "testA",
        age: 2
    },
    {
        name: "testkkk",
        age: 5
    },
];
console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));
function sendEvent(name, data) {
    console.log([name, data]);
}
sendEvent("addToCart", { productID: "test", quantity: 2, time: 2, user: "ba" });
sendEvent("checkout", { time: 4, user: "jii" });
