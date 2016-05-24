/* setup your angular app here */
var veggieApp = angular.module('VeggieApp', []);
veggieApp.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.name = "bill murray";

  $scope.happy = false;

  $scope.toggleHappy = function() {
    $scope.happy = !$scope.happy
  }

}]);


//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);