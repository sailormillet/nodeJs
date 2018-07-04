'user strict'
var http = require('http')
//写法一
//var server = http.createServer(function(request, response){
//   console.log(request.method + ':' + request.url);
//   response.writeHead(200, {'Content-Type' : 'text/html'});
//   response.end('<h1> hello world</h1>')
//})

//写法二
var server = new http.Server()
server.on('request', function(request,response){
   response.writeHead(200, {'content-Type': 'text/html'})
   response.write('hello nodeJs')
   response.end()
})
server.listen(3000);
console.log('Server is running at http://127.0.0.1:3000/')
