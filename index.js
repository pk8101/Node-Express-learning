const http =require('http');
port =5000;
http.createServer((req,res)=>{
  res.write('hello World ');
  res.end('example for server');
}).listen(port,()=>{
  console.log('server started !!')
});

var options={
  method:'GET',
  path:'/courses',
  host:'www.geeksforgeeks.org',
}
http.request(options,(res)=>{
  console.log(`StatusCode:${res.statusCode}`)
}).end()