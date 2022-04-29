const path = require('path');
var filePath = 'C:/Users/xifeng/Desktop/前端/Node.js';
var fileName = path.basename(filePath);
console.log(fileName);

var nameWithoutExt = path.basename(filePath, '.js');
console.log(nameWithoutExt);