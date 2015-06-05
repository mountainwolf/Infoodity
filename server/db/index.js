var pg = require('pg');
var sanitize = require('./utils').sanitize

var dbUrl = process.env.DATABASE_URL || 'postgres://username:@localhost/mountainwolf';

module.exports = {

  // Search for restaurants with names containing query.
  search: function(query, cb) {
    var queryStr = "SELECT * FROM restaurants WHERE LOWER(name) like LOWER('%" + sanitize(query) + "%');";
    pg.connect(dbUrl, function(err, client, done) {
      client.query(queryStr, function(err, result) {
        done();
        if( err ) {
          console.error(err);
        } else {
          cb(result.rows);
        }
      });
    });
  },

  // Retrieve the data from the restaurant with id=id
  restaurantInfo: function(id, cb) {
    var queryStr = "SELECT * FROM restaurants WHERE id = " + id + ";";
    pg.connect(dbUrl, function(err, client, done) {
      client.query(queryStr, function(err, result) {
        done();
        if( err ) {
          console.error(err);
        } else {
          cb(result.rows);
        }
      });
    });
  },

  // Retrieve data about all reviews for the restaurant with id=id
  restaurantReviews: function(id, cb) {
    var queryStr = "SELECT reviews.rating, reviews.dish_name, reviews.text, reviews.image_url, \
                    users.user_name, restaurants.name FROM reviews INNER JOIN users \
                    ON reviews.user_id = users.id INNER JOIN restaurants ON \
                    reviews.restaurant_id = restaurants.id WHERE restaurant_id = " + id + " \
                    ORDER BY reviews.id DESC;";
    pg.connect(dbUrl, function(err, client, done) {
      client.query(queryStr, function(err, result) {
        done();
        if( err ) {
          console.error(err);
        } else {
          cb(result.rows);
        }
      });
    });
  },

  // Add a review with the given parameters to the database
  postReview: function(user_id, restaurant_id, rating, dish_name, text, image_url, cb) {
    console.log(user_id, restaurant_id, rating, dish_name, text, image_url);
    if (!(user_id===undefined || restaurant_id===undefined || rating===undefined || dish_name===undefined || text===undefined)) {

      if (rating==="undefined") {
        rating = 0;
      }

      var queryStr = "INSERT into reviews (user_id, restaurant_id, rating, dish_name, text, \
                      image_url) values ("+user_id+","+restaurant_id+","+rating+",'"
                      + sanitize(dish_name)+"','"+sanitize(text)+"','"+sanitize(image_url)+"');";
      console.log(queryStr);
      pg.connect(dbUrl, function(err, client, done) {
        client.query(queryStr, function(err, result) {
          done();
          if( err ) {
            console.error(err);
          } else {
            cb(result.rows);
          }
        });
      });
    } else {
      cb();
    }
  },

};