// 重新写js代码 
var fs = require('fs');
var jsonfile = require('jsonfile');
var srcPath ="./";
var targetPath ="./123.json";
//写一个类
function OperationFiles(srcPath,targetPath){
    this.srcPath = srcPath;
    this.targetPath = targetPath;  
}
OperationFiles.prototype.readdir=function(){fs.readdir(srcPath,(err,obj)=>{
    if(err){
        console.log(err);
    }else{
        console.log(obj);
    }
});};
OperationFiles.prototype.writeFile=function(){fs.writeFile(targetPath,(err,obj)=>{
    if (err) {
        console.log(err);
    } else {  
        console.log("dosoming.....");
    }
});};
var operationFiles = new OperationFiles(srcPath,targetPath);
operationFiles.readdir();
