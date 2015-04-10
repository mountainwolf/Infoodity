var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var port = process.env.PORT || 3000;

// links to client side

var app = express();


console.log('Now listening on ' + port);

app.listen(port);

app.use('/', express.static(path.join(__dirname, '../client')));