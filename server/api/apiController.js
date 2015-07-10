var data = require('../data/testData');
var db = require('../db/index');
var adapter = require('../data/adapter');
var cloudinary = require('../cloudinary/upload');
var fs = require('fs');
var imageUtils = require('../cloudinary/utils');
var multiparty = require('multiparty');


// Set to true to use the database or false to use test data
var useDB = true;   


// These functions have else branches in the case of useDB false
module.exports = {

  // Get all restaurants containing the string in req.query.query and return in res
  getRestaurantsWithName: function(req, res, next) {
    if (useDB) {
      db.search(req.query.query, function(rows){
        var result = adapter.restaurantsFromSearch(rows);
        res.end(JSON.stringify(result));
      });
    } else {
      var restaurants = data.data.restaurants;
      var list = [];
      restaurants.forEach(function(restaurant){
        if (restaurant.name === req.query.query) {
          list.push(restaurant);
        }
      });
      res.end(JSON.stringify(list));
    }
  },

  // Get the restaurant with id===req.params.id from database
  getRestaurantWithID: function(req, res, next) {
    if (useDB){
      db.restaurantInfo(Number(req.params.id), function(rows){
        var result = adapter.restaurantsFromSearch(rows[0]);
        res.end(JSON.stringify(result));
      });
    } else {
      var restaurants = data.data.restaurants;
      var list = [];
      restaurants.forEach(function(restaurant) {
        if (restaurant.id === Number(req.params.id)) {
          list.push(restaurant);
        }
      });
      var result = adapter.restaurantsFromQuery(list[0]);
      res.end(JSON.stringify(result));
    }
  },

  // Get All reviews for restaurant with id===req.params.id
  getReviewsWithRestaurantID: function(req, res, next) {

    if (useDB) {
      db.restaurantReviews(Number(req.params.id), function(rows){
        var result = adapter.restaurantsFromSearch(rows);
        res.end(JSON.stringify(rows));
      });
    } else {
      var reviews = data.data.reviews;

      var list = [];
      var id = Number(req.params.id);
      reviews.forEach(function(review) {
        if (review.restaurantID === id) {
          list.push(review);
        }
      })

      var result = adapter.reviewsFromQuery(list);
      res.end(JSON.stringify(result));
    }
  },

  /* *
   * Post a review to the db. This is called by post full review, not one of the routes
   * req will have the correct image_url in req.body
   */
  postReview: function(req, res, next) {

    if (useDB) {
      var info = req.body;
      db.postReview(info.user_id,info.restaurant_id,info.rating,info.dish_name, info.text, info.image_url, function(rows) {
        res.status(202).end(JSON.stringify(req.body));
      } );
    } else {
      res.status(202).send(JSON.stringify(req.body));
    }
  },

  /* *
   * Post a review with an image. From the api/review POST route
   * A javascript FormData object is used to store the image
   * and other fields.
   */
  postFullReview: function(req, res, next) {

    // This will parse the FormData
    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files){

      if (files.file){
        var stream = cloudinary.upload_stream(function(result) {
          req.body.image_url = imageUtils.resizedImageURL(result.url, 600);

          module.exports.postReview(req, res, next);
        });

        for (var key in fields) {
          req.body[key] = fields[key][0];
        }
        fs.createReadStream(files.file[0].path)
          .pipe(stream);

      } else {
        res.send(404);
      }
    })
  }
}
