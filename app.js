var express = require('express'),
	port = process.env.PORT || 3000,
	app = express.createServer();

app.get('/', function(request, response) {
	response.sendfile(__dirname + '/iocounter.html');
}).listen(port);