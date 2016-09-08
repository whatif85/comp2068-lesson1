// link to the http library that ships with node
var http = require('http');

// launch the http server and send a response asynchronously
http.createServer(function(request, response) 
{
    response.writeHead(200); // status ok
    response.end('First node page'); // response to browser for users
}).listen(3000); //use 3000 port (default)

console.log('Server running on port 3000'); // to command prompt for developers