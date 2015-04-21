// This page contains all router information for the app
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
        'landing-area': {
          templateUrl: 'app/landingPage/landingPage.html',
          controller: 'LandingPageController'
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
    // two views are displayed when routed to the restaurant page
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
      url: '/post',
      'views': {
        'main-content': {
          templateUrl: 'app/submitReview/submitReview.html',
          controller: 'SubmitReviewController'
        }
      }
    })
});
