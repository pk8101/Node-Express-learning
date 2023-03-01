const assert=require('assert').strict;
let x=5,y=4;
try{
    assert.deepStrictEqual(x===y,x!==y)//checking condition
}
catch(error){
    console.log('error',error)
}
