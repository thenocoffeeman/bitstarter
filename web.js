var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var content = fs.readFileSync('index.html');

var buffer = new Buffer(content);

app.get('/', function(request, response) {
  response.send(content.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
