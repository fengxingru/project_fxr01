//默认情况下module.exports和exports指向同一个对象
console.log(exports === module.exports);
const objExport = require('./素材/2.4 exports');
console.log(objExport);