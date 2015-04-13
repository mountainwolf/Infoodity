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
    getResults: getResults;
  }
});
