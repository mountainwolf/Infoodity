infoodity.controller('SubmitReviewController', ['$scope', 'Post', 'Restaurant', function ($scope, Post, Restaurant){
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

