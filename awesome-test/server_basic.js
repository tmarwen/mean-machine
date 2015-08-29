/*
// ******* The native way *******
// get the http and filesystem modules
var http = require('http'),
fs = require('fs');
// create our server using the http module
http.createServer(function(req, res) {
// write to our server. set configuration for the response
res.writeHead(200, {
'Content-Type': 'text/html',
'Access-Control-Allow-Origin' : '*'
});
// grab the index.html file using fs
var readStream = fs.createReadStream(__dirname + '/index.html');
// send the index.html file to our user
readStream.pipe(res);
}).listen(1337);
// tell ourselves what's happening
console.log('Visit me at http://localhost:1337');
*/

// ******* The express way *******
// load the express package and create our app
var express = require('express');
var app = express();
var path = require('path');

// send our index.html file to the user for the home page
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

// start the server
app.listen(1337);
console.log('1337 is the magic port!');