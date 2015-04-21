/** These can be used to convert data into the correct
 * format, in case the data is coming back with different
 * names or the incorrect format. For now the data does 
 * not need to be adapted before being sent to the client.
 */

module.exports = {
  reviewsFromQuery: function(data) {
    return data;
  },

  restaurantsFromQuery: function(data) {
    return data;
  },

  restaurantsFromSearch: function(data) {
    return data;
  } 

}




