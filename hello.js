const assert=require('assert').strict;
let x=5,y=4;
try{
    assert(0)
}
catch(error){
    console.log('error',error)
}