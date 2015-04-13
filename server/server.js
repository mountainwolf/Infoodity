var express = require('express');

var api = require('./routes/api');
var routes = require('./routes/index');


var port = process.env.PORT || 3000;

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());

app.use('/api/', api)
app.use('/', routes);

console.log('Now listening on ' + port);

app.listen(port);

