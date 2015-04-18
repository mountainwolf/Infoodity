
var infoodity = angular.module('infoodity', ['ui.router'])
  
.controller('searchRestaurant', ['$scope', '$state', 'Search', function($scope, $state, Search){
  
  $scope.submit = function() {
//    Search.search($scope.search)
//    .then(function(data) {
//      $state.go('restaurantResults');
//    })
//    .catch(function(err){
//      console.log(err);
//    })
    $state.go('restaurantResults');
  }
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
    //    controller: 'restaurantPage/restaurantPage.js'
        },
        'secondary-content': { 
          templateUrl: 'app/reviews/reviews.html',
  //      controller: 'reviews/reviews.js'
        }
      }
    })
//    .state('reviews', {
//      parent: 'restaurantPage',
//      url: '/reviews'
//    })
//     .state('post', {
//      url: '/results',
//      parent: 'restaurantPage',
//      templateUrl: 'results/results.html',
//      controller: 'results/results.js'
//    })
});
