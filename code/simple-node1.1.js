var http = require('http');
var hostname = "localhost";
var port = 3000;
var server = http.createServer((req,resp)=>{
    var path = req.url;
    console.log(path);
    //从下面的这一行代码的参数当中我们可以,一个是str,一个是json对象,需要传递一个json对象,说明里面可以需要很多参数,可以是一个key-value 也可以是多个
    // "Content-Type":"text/html;charset=utf-8" 这是其中一个参数,其实没必要记忆,可以使用Chrome浏览器的console,中network标签获取到任意一个网页中的response返回的内容
    resp.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    resp.end();
}); 

server.listen(port,hostname,()=>{
    console.log('Server running at http://${hostname}:${port}/');
});