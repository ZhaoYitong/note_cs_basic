var fs = require('fs')

fs.readFile('../test_file/test.txt', (error, data) => {
    console.log(data.toString());
})


