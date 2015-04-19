infoodity.controller('SubmitReviewController', ['$scope', 'Reviews', 'Restaurant', function($scope, Reviews, Restaurant) {
  var data = {

    file: $scope.img,
    dish_name: $scope.dishname,
    text: $scope.review,
    rating: $scope.stars, //this may be retrieved from ng-click event.
    restaurant_id: Restaurant.getRestaurant().id,
    user_id: 1
  }
  Post(data);

}]);

