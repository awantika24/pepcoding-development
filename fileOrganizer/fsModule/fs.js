let fs=require("fs");
let path = require('path');

// let content = fs.readFileSync("f1.txt");
// console.log(content+"");

// fs.writeFileSync('abc.txt','timon and pumba');

// fs.appendFileSync("abc.txt","hakunama tata");//to prevent overwrite

// //fs.unlinkSync('abc.txt');//delete a file

// //directories

// fs.mkdirSync('pathModule');

// //to delete folder
// fs.rmdirSync('pathModule')

// //tocheck existence of files
// let doesExist = fs.existsSync("fs1.js");
// //console.log("fs1.jsfile",doesExist);

// //statusObj of file/folder
// let statusObj = fs.lstatSync("f1.txt");//CHECKING THE PATH OF FOLDER OR FILE
// console.log(statusObj);

// console.log(statusObj.isFile());
// console.log(statusObj.isDirectory());

// // let fileArr = fs.readdirSync("D:\pepcoding-development\fileOrganizer\fsModule\fs.js");
// // console.log(fileArr);

let srcPath='D:\pepcoding-development\fileOrganizer\fsModule\f1.txt';
let destPath='D:\pepcoding-development\fileOrganizer\f2.txt';

let tobeCoppiedFileName = path.basename(srcPath);//last base of source path f1.txt
let dest=path.join('D:\pepcoding-development\fileOrganizer\fsModule\dir',tobeCoppiedFileName);//dir/f1.txt
console.log(dest);

fs.copyFileSync(srcPath,destPath);//USED TO COPY A FILE FROM SRC TO DEST if not exist then over write.
fs.copyFile(srcPath,dest);