var myApp = angular.module('myApp', []);
  myApp.controller('meetupsController', ['$scope', function($scope){
    $scope.meetupsCount = 10;
  }])
