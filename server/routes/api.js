var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');
var fs = require('fs');

var data = require('../data/testData');

router.get('/search/', function(req, res, next) {
  var restaurants = data.data.restaurants;
  var list = [];
  console.log(req.query);
  restaurants.forEach(function(restaurant){
    if (restaurant.name === req.query.name) {
      list.push(restaurant);
    }
    
  })
  res.end(JSON.stringify(list));
});

router.get('/restaurant/:ID', function(req, res, next) {
  var reviews = data.data.reviews;

  var list = [];
  var id = Number(req.params.ID);
  reviews.forEach(function(review){
    if (review.restaurantID === id) {
      list.push(review);
    }
    
  })
  res.end(JSON.stringify(list));
}) 

router.post('/', function(req, res, next) {
  res.status(202).send('post request was heard');
});

module.exports = router;