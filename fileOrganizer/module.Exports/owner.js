let str='Hakunama tata';
let a=10;
function foo(msg){
    return 'hi i was made in owner.js'+msg
};
//module.exports =str;
// module.exports =foo;
console.log('hello i was made in owner.js');
module.exports={
    var:a,
    string:str,
    foofunc:foo  
};