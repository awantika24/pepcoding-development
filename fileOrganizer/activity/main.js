let helpObj=require('./commands/help');
let treeObj=require('./commands/tree');
let organizeObj=require('./commands/organize');

let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];

switch(command){
    case "help":
        helpObj.helpfn();
        break;
    case "tree":
        treeObj.treefn(path);
        break;
    case "organize":
        organizeObj.organizefn(path);
        break;
    default:
        console.log('invalid command');
        break;
}