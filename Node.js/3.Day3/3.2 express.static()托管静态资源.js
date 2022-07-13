const express = require('express');

const app = express();

//托管静态资源文件
// app.use(express.static('case1.10'));

//挂载路径前缀
app.use('/case1.10', express.static('case1.10'));

app.listen(80, function() {
    console.log('express server running at http://127.0.0.1');
})