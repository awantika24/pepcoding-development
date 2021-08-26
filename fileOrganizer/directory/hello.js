let fs=require("fs");
let path = require('path');
let inputArr = process.argv.slice(2);
let inputDir = inputArr[0];

let allEntities = fs.readdirSync(inputDir);
console.log(allEntities);

for(let i=0;i<allEntities.length;i++){
    let entityName = allEntities[i];
    console.log(entityName);
    let eName=path.join(inputDir,entityName);

    let stats = fs.lstatSync(entityName);
    let isFile=stats.isFile();
    if(isFile){
        let extName =path.extname(entityName);
        if(extName=='.txt')
        content +=fs.readFileSync(entityName);
    }

    }
}

let summaryFile = 'D:\pepcoding-development\fileOrganizer\summary.txt';
fs.writeFileSync(summaryFile,content);