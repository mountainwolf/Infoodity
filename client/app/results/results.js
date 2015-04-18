infoodity.controller('ResultsController',['$scope', 'Search', function ($scope, Search){
  $scope.results = {};

  $scope.getResults = function() {
    $scope.results = Search.results();
  };

  $scope.getResults();
  // $scope.results = [{
  //   "id": 1,
  //   "name": "The Sentinel",
  //   "location": "04917",
  //   "price": 30
  // },
  // { "id": 2,
  //   "name": "asdf",
  //   "location": "04917",
  //   "price": 50
  // }];
}]);


//set click event listener to route to restaurant reviews page using service that uses the restaurant/:id path to re-route.
//once I get the review data back populate the second-view with review data.


//      var nameSearched = $location.path().split('=').pop();
//
//      $scope.data = {} // getData
//
//      $scope.getResults = function (name) { // function used to populate data field (is parameter data necessary??)
//        console.log(name);
//        Results.getResults(name) // call $http request
//          .then(function (data) {
//            console.log(data);
//            $scope.results = data;
//            console.log(data); // on return of $http call, populate data
//          })
//          .catch(function (error) {
//            console.error(error); // if error on return of $http call, return error
//          });
//      };
//
//      $scope.getResults(nameSearched);

  // reroute to restaurant page