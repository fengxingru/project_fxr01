const fs = require('fs');
//读取文件时采用的编码格式一般指定为utf-8
fs.readFile('./files/被读取内容的文件.txt', 'utf-8', function(err, dataStr) {
    //打印失败后的结果
    console.log(err);
    //打印成功后的结果
    console.log(dataStr);
})