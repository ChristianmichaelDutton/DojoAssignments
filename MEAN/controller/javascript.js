var app = angular.module('app', []);
app.controller('monstersController', ['$scope', function($scope) {
    $scope.monsters = [];
    $scope.addMonster = function() {
        $scope.monsters.push($scope.monster);
        $scope.monster = "";
    }
}]);
