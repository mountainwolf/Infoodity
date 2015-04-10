angular.module('infoodity.services', [])

.factory('Results', function ('$http'){

  var getResults = function(){
    return $http({
      method: 'GET',
      url: '/api/results'
    })
    .then(function(resp) {
      return resp.data;
    });
  }

  return {
    getResults: getResults;
  }
});

.factory('Restaurant', function ('$http'){

  var getRestaurant = function(restaurant){
    return $http({
      method: 'GET',
      url: '/api/results/' + restaurant
    })
    .then(function(resp) {
      return resp.data;
    });
  }

  return {
    getResults: getResults;
  }
});
