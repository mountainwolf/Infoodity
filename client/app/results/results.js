angular.module('infoodity.searchResults', [])

  .controller('ResultsController',['$scope', 'Results', '$location', function ($scope, Results, $location){

    var nameSearched = $location.path().split('=').pop();

    $scope.data = {} // getData

    $scope.getResults = function (name) { // function used to populate data field (is parameter data necessary??)
      Results.getResults(name) // call $http request
        .then(function (data) {
          $scope.data.results = data; // on return of $http call, populate data
        })
        .catch(function (error) {
          console.error(error); // if error on return of $http call, return error
        });
    };

    $scope.getResults(nameSearched);

// reroute to restaurant page
  }])

