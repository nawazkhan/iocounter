var express = require('express'),
	port = process.env.PORT || 3000,
	app = express();

app.get('/', function(request, response) {
	response.sendfile(__dirname + '/iocounter.html');
}).listen(port);