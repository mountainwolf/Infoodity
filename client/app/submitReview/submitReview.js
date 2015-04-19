infoodity.controller('SubmitReviewController', ['$scope', 'Post', 'Restaurant', function ($scope, Post, Restaurant){
  var data = {
    dish_name: $scope.dish,
    image_url: $scope.img, //I don't think this will work...this might even be a seperate post request.
    name: $scope.name,
    rating: $scope.stars, //this may be retrieved from ng-click event.
    restaurantID: Restaurant.getRestaurant().id,
    stars: $scope.stars //how does this differ from rating property? (copied from testdata object)
    text: $scope.review,
    user_name: $scope.user
  }
  Post(data);
}]);

