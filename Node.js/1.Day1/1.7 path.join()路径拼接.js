const fs = require('fs');
const path = require('path');
const pathStr = path.join(__dirname, '/files/被读取内容的文件.txt');
console.log(pathStr);
fs.readFile(pathStr, 'utf-8', function(err, dataStr) {
    if (err) {
        return console.log("读取文件失败" + err.message);
    }
    console.log("读取文件成功" + dataStr);
})