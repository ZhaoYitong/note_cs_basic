var http = require('http');

var server = http.createServer();

var fs = require('fs');

const products = [
    {
        name: '积分卡数据库',
        price: 800
    },
    {
        name: 'b',
        price: 800
    },
    {
        name: 'va',
        price: 80
    }
]

server.on('request', (req, res) => {


    let url = req.url;
    console.log("The port is " + req.socket.remotePort);

    if (url === '/') {
        fs.readFile('../resource/index.html', (err, data) => {
            if (err) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end('Failed to read file, please try later');
            } else {
                res.end(data);
            }
        });
    } else if (url === '/html') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h2>This is my first</h2>')
    } else if (url === '/login') {
        res.end('login page');
    } else if (url === '/products') {
        res.end(JSON.stringify(products));
    } else {
        res.end('Not found');
    }
    
    console.log('received', req.url);
});


server.listen(8000, () => {
    console.log("get");
})