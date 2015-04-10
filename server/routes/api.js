var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');
var fs = require('fs');


router.get('/', function(req, res, next) {
  res.status(404).end();
})

router.get('/:something', function(req, res, next) {
  res.end('fake data');
});

module.exports = router;