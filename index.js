// To create server using nodeJs
let http = require ('http');
http.createServer(function(request, response){
response.writeHead(200);
response.write("introduction to node js test nodemon");
response.end();

}).listen(8000)