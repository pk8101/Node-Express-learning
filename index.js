var http = require("http");
var port =5000
http.createServer((req, res) =>{
    res.end("this is an example of pradeep");
  })
  .listen(port, () => console.log("server running good to go!!"))
  

