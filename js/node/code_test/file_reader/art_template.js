let template = require('art-template');
let fs = require('fs');


fs.readFile('../resource/index.html', (err, data) => {
    if (err) {
        return console.log('Failed to read file')
    }
    var htmlStr = template.render(data.toString(), {
        name: 'Jack',
        age: 15,
        province: 'Beijing',
        hobbies: [
            'code', 'sing', 'basketball'
        ]
    })
    
    console.log(ret);
})
