var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var api = require('./routes/api');
var routes = require('./routes/index');


var port = process.env.PORT || 3000;

// links to client side

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());

app.use('/api/', api)
app.use('/', routes);

console.log('Now listening on ' + port);

app.listen(port);

