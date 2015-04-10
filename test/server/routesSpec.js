var request = require('supertest');
var expect = require('chai').expect;
var bodyParser = require('body-parser');
var path = require('path');


// links to client side

var url = "localhost:3000"

describe('', function() {


  describe('get index ', function() {

    it('returns 200', function(done) {
      request(url)
        .get('/')
        .expect(200)
        .end(done);
    });


  });


  describe('get api ', function() {

    it('returns 200 for any path except root', function(done) {
      request(url)
        .get('/api/something')
        .expect(200)
        .end(done);
    });

    it('returns 404 at root', function(done) {
        request(url)
          .get('/api/')
          .expect(404)
          .end(done);   
    });


    it('returns 404 at root', function(done) {
        request(url)
          .get('/api/')
          .expect(404)
          .end(done);   
    });


  });
  describe('post api ', function() {

    it('returns 202 for post to root', function(done) {
      request(url)
        .post('/api/')
        .expect(202)
        .end(done);
    });



  });
});