var express = require('express');

var port = process.env.PORT || 3000;

var app = express();

require('./config/middleware.js')(app, express);

console.log('Now listening on ' + port);

app.listen(port);
