var app = angular.module('infoodity', [
  'infoodity.searchResults',
  'infoodity.services',
  'infoodity.reviews',
  'infoodity.restaurantPage',
  'infoodity.submitReview',
  'ui.router',
  ])
  .config(function($routeProvider, $stateProvider, $urlRouteProvider) {
    $urlRouteProvider.otherwise('');
    $stateProvider
      .state('home', {
        url: '',
        controller: 'HomeController'
      })
  }

