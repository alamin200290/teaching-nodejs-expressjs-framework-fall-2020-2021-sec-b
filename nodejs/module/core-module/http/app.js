const http = require('http');
const fs = require('fs');

var server = http.createServer((request, response)=>{
	//console.log(request.url);
	//console.log(request.method);

	/*response.write('<h1>Hello from node Http server...</h1>');
	response.end()*/

	if(request.url == '/'){
		response.write('Index page');
		response.end();
	}else if(request.url == '/home'){

		//response.writeHead(200, {'content-type' : 'text/plain'});
		//response.write("<h3>Home page</h3>");
		//response.end();

		/*var data = fs.readFileSync('test.html').toString();
		response.write(data);
		response.end();*/

		fs.createReadStream('test.html').pipe(response);

	}else{
		response.write('<h3>404 invalid request</h3>');
		response.end()
	}
});

server.listen(3000);
console.log('server started at 3000...');