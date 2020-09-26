// write file


var fs = require('fs')


fs.writeFile('hello.md', 'this is my girl', function (error) {
    console.log("success")
});
