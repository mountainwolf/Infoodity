infoodity.factory('Search', function($http) {
  var _results = {};

  // query database from index and save resp
  var search = function(query) {
    return $http({
      method: 'GET',
      url: '/api/search',
      params: {query: query}
    })
    .then(function(resp) {
      _results = resp.data;
    });
  };

  // return query results for ResultsController
  var results = function() {
    return _results;
  };

  return {
    search: search,
    results: results
  };
});

infoodity.factory('Restaurant', function($http) {
  var _restaurant = {};

  // query db from results.html and save resp
  var setRestaurant = function(id) {
    return $http({
      method: 'GET',
      url: '/api/restaurant/' + id
    })
    .then(function(resp) {
      _restaurant = resp.data;
    });
  };

  // return restaurant for RestaurantController
  var getRestaurant = function() {
    return _restaurant;
  };

  return {
    getRestaurant: getRestaurant,
    setRestaurant: setRestaurant
  };
});

infoodity.factory('Reviews', function($http) {
  // query db for all reviews for a restaurant
  var getReviews = function(id) {
    return $http({
      method: 'GET',
      url: '/api/reviews/' + id
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  // send POST request to server through FormData object
  var postReview = function(formData) {
    return $http({
      method: 'POST',
      url: 'api/review',
      processData: false,
      data: formData,
      transformRequest:angular.identity,
      headers:{'Content-Type':undefined}
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  return {
    getReviews: getReviews,
    postReview: postReview
  };
});

/*
* the validFile directive permits upload validation for the file (img)
* input field submitReview.html
*/

infoodity.directive('validFile', function () {
  return {
    require: 'ngModel',
    link: function (scope, el, attrs, ngModel) {
      ngModel.$render = function () {
        ngModel.$setViewValue(el.val());
      };
    el.bind('change', function () {
      scope.$apply(function () {
        ngModel.$render();
        });
      });
    }
  };
});
