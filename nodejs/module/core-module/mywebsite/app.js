const http = require('http');
const fs = require('fs');

var server = http.createServer((request, response)=>{
	if(request.url == '/home'){
		fs.createReadStream('home.html').pipe(response);
	}else if(request.url == '/contact'){
		fs.createReadStream('contact.html').pipe(response);
	}else if(request.url == "/about"){
		fs.createReadStream('about.html').pipe(response);
	}
});

server.listen(3000);
console.log('server started at 3000...');