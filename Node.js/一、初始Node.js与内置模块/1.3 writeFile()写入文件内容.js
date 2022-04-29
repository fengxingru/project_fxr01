const fs = require('fs');
fs.writeFile('./files/被写入内容的文件.txt', 'hhhh', 'utf-8', function(err) {
    console.log(err);
})