var express = require('express'),
	port = process.env.PORT || 3000,
	app = express();



app.get('/', function(request, response) {
	response.sendFile(__dirname + '/iocounter.html');
}).listen(port);

app.use(express.static('js')); //makes anything inside js public