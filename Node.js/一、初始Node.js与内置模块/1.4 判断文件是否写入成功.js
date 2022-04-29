const fs = require('fs');
//读取文件时采用的编码格式一般指定为utf-8
fs.writeFile('./files/被写入内容的文件.txt', 'kkkk', 'utf-8', function(err) {
    if (err) {
        return console.log("写入文件失败" + err.message);
    }
    console.log("写入文件成功");
});