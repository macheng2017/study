var http = require("http"); 
var server = http.createServer(function(req,res){
    //设置response请求返回参数, 状态码200,以及头部信息,头部信息是一个json对象,
    //为什么是一个json对象,因为一个json对象可以包含多个参数,比如一些浏览器的其他属性,缓存,cookie,
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    res.end("<h1>first html!!</h1>");
});
//
server.listen("3000","localhost");