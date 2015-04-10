var request = require('supertest');
var express = require('express');
var expect = require('chai').expect;
var bodyParser = require('body-parser');
var path = require('path');

var server = require('../../server/server');
var api = require ('../../server/routes/api')
var client = require('../../server/routes/index')

var port = 7432;

// links to client side
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());

app.use('/api/', api)
app.use('/', client);

console.log('Now listening on ' + port);

app.listen(port);



describe('', function() {


  describe('get index ', function() {

    it('returns 200', function(done) {
      request(app)
        .get('/')
        .expect(200)
        .end(done);
    });


  });


  describe('get api ', function() {

    it('returns 200 for any path except root', function(done) {
      request(app)
        .get('/api/something')
        .expect(200)
        .end(done);
    });

    it('returns 404 at root', function(done) {
        request(app)
          .get('/api/')
          .expect(404)
          .end(done);   
    });


  });
});