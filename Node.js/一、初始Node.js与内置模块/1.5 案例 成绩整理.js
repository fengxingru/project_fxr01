const fs = require('fs');
fs.readFile('./files/旧成绩单.txt', 'utf-8', function(err, dataStr) {
    if (err) {
        return console.log('读取文件失败' + err.message);
    }
    // console.log('读取文件成功' + dataStr);

    //以空格分隔,将dataStr字符串转换为数组
    const arrOld = dataStr.split(' ');
    const arrNew = [];
    //循环数组，将=替换为:，并追加至新数组中
    arrOld.forEach(item => {
            arrNew.push(item.replace('=', ':'));
        })
        //已换行符分隔，将数组转换为字符串
    const newStr = arrNew.join('\r\n');
    // console.log(newStr);

    fs.writeFile('./files/新成绩单.txt', newStr, 'utf-8', function(err) {
        if (err) {
            return console.log('写入失败' + err.message);
        }
        console.log('写入成功');
    })
})