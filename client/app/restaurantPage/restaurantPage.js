infoodity.controller('RestaurantController', ['$scope', 'Restaurant', function ($scope, Restaurant){
  $scope.results = Restaurant.getRestaurant();
}]);
