infoodity.controller('ReviewsController', ['$scope', 'Restaurant', 'Reviews', function ($scope, Restaurant, Reviews){
  var restaurant = Restaurant.getRestaurant();
    
  Reviews.getReviews(restaurant.id)
  .then(function(data) {
    $scope.results = data;
  });
}]);
