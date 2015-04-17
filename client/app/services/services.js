//angular.module('infoodity.services', [])

  infoodity.factory('Search', function ($http) {
    var _results = {};

    var search = function(query) {
      console.log('in search()');
      $http({
        method: 'GET',
        url: '/api/search',
        params: {query: query}
      })
      .then(function(resp) {
        console.log(resp);
        _results = resp.data;
      });
    };

    var results = function() {
      console.log('in results()');
      return _results;
    };

    return {
      search: search,
      results: results
    };
  })

  infoodity.factory('Restaurant', function ($http){

    var getRestaurant = function(id){
      return $http({
        method: 'GET',
        url: '/api/restaurant/' + id
      })
      .then(function(resp) {
        return resp.data;
      });
    }

    return {
      getRestaurant: getRestaurant
    }
  })

  infoodity.factory('Reviews', function ($http){
    
    var getReviews = function(id){
      return $http({
        method: 'GET',
        url: '/api/reviews/' + id
      })
      .then(function(resp) {
        return resp.data;
      });
    }

    return {
      getReviews: getReviews
    }
  })



