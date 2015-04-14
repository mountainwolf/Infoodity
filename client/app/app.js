var app = angular.module('infoodity', [
  'infoodity.restaurantPage',
  'infoodity.searchResults',
  'infoodity.services',
  'infoodity.reviews',
  'infoodity.submitReview',
  'ui.router'
  ])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('restaurantPage', {
        url: '/restaurantpage',
        templateUrl: './app/client/restaurantPage/restaurantPage.html',
        controller: 'RestaurantController',
        views: {
        "main-content": { templateUrl: "./app/client/restaurantPage/restaurantPage.html" },
        "secondary-content": { templateUrl: "./app/client/reviews/reviews.html" }
        }
      })
    $stateProvider
      .state('results', {
        url: '/results',
        template: './app/client/results/results.html',
        controller: 'ResultsController'
      })
    $stateProvider
      .state('submitReview', {
        url: '/submitReview',
        templateUrl: './app/client/submitReview/submitReview.html',
        controller: 'SubmitReviewController'
      })
  }]);
