const http =require('http');
port =5000;
http.createServer((req,res)=>{
  res.write('hello World');
  res.end('example for server');
}).listen(port);

