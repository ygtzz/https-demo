var express = require("express");
var app = express();
var fs = require('fs');
// Run static server
var https = require('https');

var key = fs.readFileSync('./cert/private.key');
var cert = fs.readFileSync('./cert/mydomain.crt');

var options = {
    key: key,
    cert: cert
};

const router = express.Router()

app.use((req, res, next) => {
  console.log(`路由执行成功啦~~~`, Date.now());
  next()
})


app.get(`/`, (req, res, next) => {
  res.json({
    status: 200,
    data: `请求成功`
  })
})


app.get(`/data`, (req, res, next) => {
  res.json({
    status: 200,
    data: [1, 2, 3, 4, 5, 6, 7]
  })
})

https.createServer(options, app).listen(8888); 

console.log('https server listen on 8888');