infoodity.controller('SubmitReviewController', ['$scope', 'Reviews', 'Restaurant', '$state', function($scope, Reviews, Restaurant, $state) {

  $scope.sendReview = function(){
    var fd = new FormData();
    fd.append('file', $('.image')[0].files[0], 'image');
    fd.append('dish_name', $scope.dishname);
    fd.append('text', $scope.review);
    fd.append('rating', $scope.stars);
    fd.append('restaurant_id', Restaurant.getRestaurant().id);
    fd.append('user_id', 1);
    Reviews.postReview(fd)
      .then(function(){
        $state.go('restaurantPage');
      });
  };
}]);

