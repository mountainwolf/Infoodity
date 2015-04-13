var data = require('../data/testData');

module.exports = {
  getRestaurantsWithName: function(req, res, next) {
    
    var restaurants = data.data.restaurants;
    var list = [];
    restaurants.forEach(function(restaurant){
      if (restaurant.name === req.query.name) {
        list.push(restaurant);
      }
      
    })
    res.end(JSON.stringify(list[0]));
  },

  getRestaurantWithID: function(req, res, next) {
    var restaurants = data.data.restaurants;
    var list = [];
    restaurants.forEach(function(restaurant) {

      if (restaurant.id === Number(req.params.id)) {
        list.push(restaurant);
      }

    })
    res.end(JSON.stringify(list[0]));
  },

  getReviewsWithRestaurantID: function(req, res, next) {
    var reviews = data.data.reviews;

    var list = [];
    var id = Number(req.params.ID);
    reviews.forEach(function(review) {
      if (review.restaurantID === id) {
        list.push(review);
      }
    })
    res.end(JSON.stringify(list));
  },

  postReview: function(req, res, next) {
    res.status(202).send('post request was heard');
  }

}