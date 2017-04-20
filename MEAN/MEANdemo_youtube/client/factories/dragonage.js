var myApp = angular.module('myApp', []);
myApp.controller('DragonageController', ['$scope', '$http', function($scope, $http) {

var refresh = function(){
  $http.get('/contactlist').success(function(response){
    console.log("The dragon smiles atop his hoard!");
    $scope.contactlist = response;
    $scope.contact = '';
  });
}

refresh();

    $scope.addContact = function(response){
      console.log($scope.contact);
      $http.post('/contactlist', $scope.contact).success(function(){
        console.log(response);
        refresh();
      })
    };

    $scope.remove = function(id){
      console.log(id);
      $http.delete('/contactlist/' + id).success(function(){
        refresh();
      })
    };

    $scope.edit = function(id){
      console.log(id);
      $http.get('/contactlist/'+id).success(function(response){
        $scope.contact = response;
      })
    };

    $scope.update = function(id){
      console.log(id);
      $http.put('/contactlist/'+$scope.contact._id, $scope.contact).success(function(){
        refresh();
      })
    };

    $scope.deselect = function(){
      $scope.contact = '';
    };
}]);
