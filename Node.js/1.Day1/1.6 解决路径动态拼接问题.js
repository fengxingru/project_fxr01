// const fs = require('fs');
// //读取文件时采用的编码格式一般指定为utf-8
// //用绝对路径替换相对路径，可解决路径动态拼接问题，但代码移植性差
// fs.readFile('C:\\Users\\xifeng\\Desktop\\前端\\Node.js\\一、初始Node.js与内置模块\\files\\被读取内容的文件.txt', 'utf-8', function(err, dataStr) {
//     //打印失败后的结果
//     console.log(err);
//     //打印成功后的结果
//     console.log(dataStr);
// })

const fs = require('fs');
//读取文件时采用的编码格式一般指定为utf-8
//用绝对路径替换相对路径，可解决路径动态拼接问题，但代码移植性差
fs.readFile(__dirname + '/files/被读取内容的文件.txt', 'utf-8', function(err, dataStr) {
    if (err) {
        return console.log("读取文件失败" + err.message);
    }
    console.log("读取文件成功" + dataStr);
})