angular.module['infoodity.restaurantPage', []]

  .controller('RestaurantController', function ($scope, Restaurants, $location){
    var restaurantUrl = $location.path().split('/').pop();



});
