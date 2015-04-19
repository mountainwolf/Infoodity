
var infoodity = angular.module('infoodity', ['ui.router'])

.controller('searchRestaurant', ['$scope', '$state', 'Search', function($scope, $state, Search){
  $scope.query = '';
  $scope.submit = function() {
    Search.search($scope.query)
    .then(function() {
      if( $state.is('restaurantResults')) {
        $state.reload();
      } else {
        $state.go('restaurantResults');
      }
    });
  };
}]);

infoodity.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('home');

  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        'main-content': {
          template: '<h1> Welcome! Please Choose a Restaurant Above </h1>'
        }
      }
    })
    .state('restaurantResults', {
      url: '/restaurant-results',
      views: {
        'main-content': {
          templateUrl: 'app/results/results.html',
          controller: 'ResultsController'
        }
      }
    })
    .state('restaurantPage', {
      url: '/restaurant-page',
      'views': {
        'main-content': {
          templateUrl: 'app/restaurantPage/restaurantPage.html',
          controller: 'RestaurantController'
        },
        'secondary-content': {
          templateUrl: 'app/reviews/reviews.html',
          controller: 'ReviewsController'
        }
      }
    })
    .state('post', {
      url: '/results',
      parent: 'restaurantPage',
      templateUrl: 'app/results/results.html',
      controller: 'app/results/results.js'
    })
});
