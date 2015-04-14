var data = require('../data/testData');
var db = require('../db/index');
var adapter = require('../data/adapter')

var useDB = true;

module.exports = {
  getRestaurantsWithName: function(req, res, next) {
    
    if (useDB) {
      db.search(req.query.name, function(rows){
        var result = adapter.restaurantsFromSearch(rows)
        res.end(JSON.stringify(result));
      }); 
    } else {
      var restaurants = data.data.restaurants;
      var list = [];
      restaurants.forEach(function(restaurant){
        if (restaurant.name === req.query.name) {
          list.push(restaurant);
        }
      })

      res.end(JSON.stringify(list));
    }
    
    
  },

  getRestaurantWithID: function(req, res, next) {
    if (useDB){
      db.restaurantInfo(Number(req.params.id), function(rows){
        var result = adapter.restaurantsFromSearch(rows[0])
 
        res.end(JSON.stringify(result));
      });

    } else {
      var restaurants = data.data.restaurants;
      var list = [];
      restaurants.forEach(function(restaurant) {

        if (restaurant.id === Number(req.params.id)) {
          list.push(restaurant);
        }
      })
      var result = adapter.restaurantsFromQuery(list[0]);
      res.end(JSON.stringify(result));
    }
  },

  getReviewsWithRestaurantID: function(req, res, next) {
    if (useDB) {
      db.restaurantReviews(Number(req.params.id), function(rows){
        var result = adapter.restaurantsFromSearch(rows) 
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

  postReview: function(req, res, next) {
    if (useDB) {
      //user_id = 
      var info = req.body;
      db.postReview(info.user_id,info.restaurant_id,info.rating,info.dish_name, info.text, info.image_url, function(rows) {
        res.status(202).end();
      } );
    } else {
      res.status(202).send('post request was heard');
    }
  }

}