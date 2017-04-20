var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {templateUrl: '../partials/main.html'})
  .otherwise({redirectTo: '/'})
});

app.factory('friendsFactory', function($http){
  var factory = {};

  factory.showFriends = function(callback){
    $http.get('/friends').then(function(data){
      callback(data.data);
    })
  }

  factory.createFriend = function(newFriend, callback){
    $http.post('/friend/new', newFriend).then(function(data){
      // console.log(data);
      // console.log('The dragon smiles with sharpened fangs...');
      callback(data);
    })
    //test this to see if works by console.log. comment out once test is passed.
    // console.log (newFriend);

  }

  return factory;
})

//for linking up to the controller, we need app.controller('name of Controller',['name of Factory','$scope',
//callback function(name of Factory, $scope)])
app.controller('friendsController',['friendsFactory','$scope', function(friendsFactory,$scope){

    $scope.friends = [];

    friendsFactory.showFriends(function(data){
      $scope.friends = data;
    });

    $scope.createFriend = function(){
      //the setting of a variable to $scope.newFriend is completely optional.
      var friend = $scope.newFriend;
      friendsFactory.createFriend(friend, function(data){
        friendsFactory.showFriends(function(data){
          $scope.friends = data;
        })
      });
//console.log as a simple test. comment out the console.log test once done.
      // console.log($scope.newFriend);
    }
//write a simple test to test the page is working--comment it out when done.
// $scope.test = 'Sometimes the rainbow tastes you....'
}])
