let http = require("http");



let server = http.createServer();

let testHtml = `
    <div>This is hhh</div>
`

server.on('request', (request, response) => {
    console.log("request received, the path is: ", request.url);

    response.write('hello world\n');
    response.write('kkk');
    response.write(testHtml);
    // to tell the sever  I am done
    response.end();

});


server.listen(3000, () => {
    console.log('server start success, http://127.0.0.1:3000 is available');
})
