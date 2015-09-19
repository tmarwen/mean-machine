var connect = require('connect'),
    http = require('http'),
    static = require('serve-static');
 
var app = connect();
 
app.use(static("./angularjs"));

http.createServer(app).listen(5000);