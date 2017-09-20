var http = require('http');
var hostname = "localhost";
var port = 3000;
var server = http.createServer((req,resp)=>{
    var path = req.url;
    console.log(path);
    resp.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    resp.end();
});

server.listen(port,hostname,()=>{
    console.log('Server running at http://${hostname}:${port}/');
});