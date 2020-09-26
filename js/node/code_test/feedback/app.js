let http = require('http');
let fs = require('fs');


http
    .createServer((req, res) => {
        let url = req.url;
        if (url === '/') {
            fs.readFile('./views/index.html', (err, data)=> {
                if (err) {
                    return res.end('Not found');
                }
                res.end(data);
            })
        } else if (url.indexOf('/public/') === 0) {
            fs.readFile('.' + url, (err, data) => {
                if (err) {
                    return res.end('Not found');
                } 
                res.end(data);
            })
        }
    })
    .listen(3000, ()=> {
        console.log('running....');
    })