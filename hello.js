const assert=require('assert').strict;
let x=5,y=4;
try{
    assert.ifError(undefined)//this ifError only accept null and undefined and every thing will be error;
}
catch(error){
    console.log('error',error)
}
