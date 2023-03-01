const assert=require('assert').strict;
let a=5,b=6;
try{
    assert.notDeepStrictEqual(a,b);
    console.log("no error")
}
catch(error){
    console.log('error',error)
}
