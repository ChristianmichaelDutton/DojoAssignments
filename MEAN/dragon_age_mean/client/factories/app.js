var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {templateUrl: '../partials/main.html'})
  .otherwise({redirectTo: '/'})
});

app.factory('dragonsFactory', function($http){
  var factory = {};

  factory.showDragons = function(callback){
    $http.get('/dragons').then(function(data){
      callback(data.data);
    })
  }

  factory.createDragon = function(newDragon, callback){
    $http.post('/dragon/new', newDragon).then(function(data){
      // console.log(data);
      // console.log('The dragon smiles with sharpened fangs...');
      callback(data);
    })
    //test this to see if works by console.log. comment out once test is passed.
    // console.log (newDragon);

  }

  return factory;
})

//for linking up to the controller, we need app.controller('name of Controller',['name of Factory','$scope',
//callback function(name of Factory, $scope)])
app.controller('dragonsController',['dragonsFactory','$scope', function(dragonsFactory,$scope){

    $scope.dragons = [];

    dragonsFactory.showDragons(function(data){
      $scope.dragons = data;
    });

    $scope.createDragon = function(){
      //the setting of a variable to $scope.newDragon is completely optional.
      var dragon = $scope.newDragon;
      dragonsFactory.createDragon(dragon, function(data){
        dragonsFactory.showDragons(function(data){
          $scope.dragons = data;
        })
      });
//console.log as a simple test. comment out the console.log test once done.
      // console.log($scope.newDragon);
    }
//write a simple test to test the page is working--comment it out when done.
// $scope.test = 'Sometimes the rainbow tastes you....'
}])
