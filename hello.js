const assert=require('assert').strict;
let regex=/pradeep/;
let exp="i am very good pradeep"
try{
    assert.match(exp,regex)
    console.log("no error")
}
catch(error){
    console.log('error',error)
}
