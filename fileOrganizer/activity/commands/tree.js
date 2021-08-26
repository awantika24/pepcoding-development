

// folderpath-> file/folder traverse 
// unhe print kra do 
// prety simple 
// // -> assignment recursion 

let fs=require('fs');
let path=require("path");

"├──"
function treeFn(srcPath){
    let baseName=path.basename(srcPath);
    console.log(baseName);
    console.log("\t"+"└──");
    let content=fs.readdirSync(srcPath);
    let allEntities="";
    for(let i=0;i<content.length;i++){
        // allEntities+='\t'+"├──"+content[i];
        console.log('\t'+"├──"+content[i]);
    }
    // console.log(allEntities);
}

module.exports={
    treefn:treeFn
};