let path = require('path');
let fs = require('fs');

let inputArr = process.argv.slice(2);
console.log(inputArr);

let fileName = inputArr[0];
let content = inputArr[1];

// console.log('fileName',fileName);
// console.log('content',content);

let currentPath = process.cwd();
 //console.log(currentPath);

let joinedPath = path.join('currentPath','abc','def.txt');
//console.log(joinedPath);

let file = path.basename('D:/pepcoding-development/fileOrganizer/fsModule/pathModule/path.js');
//console.log(file);

let extName = path.extname('D:/pepcoding-development/fileOrganizer/fsModule/pathModule/path.js');
console.log(extName);