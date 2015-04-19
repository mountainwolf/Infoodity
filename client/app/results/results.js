infoodity.controller('ResultsController',['$scope', 'Search', 'Restaurant', '$state', function ($scope, Search, Restaurant, $state){
  $scope.results = Search.results();

  $scope.selection = function(selection) {
    Restaurant.setRestaurant(selection.id)
    .then(function() {
      $state.go('restaurantPage');
    });
  };

}]);
