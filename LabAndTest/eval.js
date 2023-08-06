function setDescendantProp(obj, desc, value) {
    var arr = desc.split('.');
    while (arr.length > 1) {
        obj = obj[arr.shift()];
    }

    return obj[arr[0]] = value;
}

var obj = {a: {b: {c: 0}}};

var propPath = get