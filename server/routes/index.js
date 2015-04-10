var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

router.get('/bower_components/*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../../')+req.url);
});

router.get(/.*/, function(req, res, next) {
  res.sendFile(path.join(__dirname, '../../client')+req.url);
});


module.exports = router;