var http = require("http");
var URL = require("url");
var server = http.createServer((req,resp)=>{
    //resp.writeHead(200,{});

    var path = URL.parse(req.url);
    console.log("pathname= "+path.pathname);  
    console.log("search= "+path.search);  
    console.log("query= "+path.query); 
    console.log("host= "+path.host); 
    path.host="123";
    console.log("host= "+path.host); 
    resp.end();
});

server.listen(3000,"localhost");

