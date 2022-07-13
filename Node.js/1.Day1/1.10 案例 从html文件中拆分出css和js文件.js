const fs = require('fs');
const path = require('path');

//1.定义正则表达式，匹配style和script标签，[\s\S]*表示匹配任意个空白和非空白字符
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

//2.读取index.html文件
fs.readFile(path.join(__dirname, '../素材/index.html'), 'utf-8', function(err, dataStr) {
    //读取文件失败
    if (err) return console.log('读取文件失败！' + err.message);
    //读取文件成功,调用提取CSS样式的方法
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
})

//3.定义提取CSS样式的方法
function resolveCSS(htmlStr) {
    //使用正则表达式将htmlStr中的CSS样式部分提取出来，返回内容为数组
    const cssArr = regStyle.exec(htmlStr);
    //将CSS样式部分中的style标签替换为空格
    const newCSS = cssArr[0].replace('<style>', '').replace('</style>', '');
    //将CSS样式部分写入指定文件
    fs.writeFile(path.join(__dirname, '../素材/案例1.10/index.css'), newCSS, 'utf-8', function(err) {
        if (err) return console.log('CSS样式写入失败' + err.message);
        console.log('CSS样式写入成功');
    })
}

//4.定义提取JS的方法
function resolveJS(htmlStr) {
    const jsArr = regScript.exec(htmlStr);
    const newJS = jsArr[0].replace('<script>', '').replace('</script>', '');
    fs.writeFile(path.join(__dirname, '../素材/案例1.10/index.js'), newJS, 'utf-8', function(err) {
        if (err) return console.log('JS写入失败' + err.message);
        console.log('JS写入成功');
    })
}

//5.定义处理html结构的方法
function resolveHTML(htmlStr) {
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css"/>').replace(regScript, '<script src="./index.js"></script>');
    fs.writeFile(path.join(__dirname, '../素材/案例1.10/index.html'), newHTML, 'utf-8', function(err) {
        if (err) return console.log('html文件写入失败' + err.message);
        console.log('html文件写入成功');
    })
}