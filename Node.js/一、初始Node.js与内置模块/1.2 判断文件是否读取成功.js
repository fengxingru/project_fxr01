const fs = require('fs');
//读取文件时采用的编码格式一般指定为utf-8
fs.readFile('./files/被读取内容的文件.txt', 'utf-8', function(err, dataStr) {
    if (err) {
        return console.log("读取文件失败" + err.message);
    }
    console.log("读取文件成功" + dataStr);
});