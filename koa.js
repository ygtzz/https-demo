var Koa = require('koa');
// var http = require('http');
var https = require('https');
var fs = require('fs');
var sslify = require('koa-sslify').default;

var app = new Koa();

// Force HTTPS on all page
app.use(sslify());

// index page
app.use(function * (next) {
    this.body = "https server: hello form " + this.request.url;
});

// SSL options
var options = {
    key: fs.readFileSync('./cert/private.key'),  //ssl文件路径
    cert: fs.readFileSync('./cert/mydomain.crt')  //ssl文件路径
};

// start the server
// http.createServer(app.callback()).listen(80);
https.createServer(options, app.callback()).listen(8888);


console.log('https server is running on 8888');