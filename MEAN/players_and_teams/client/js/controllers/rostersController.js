myAppModule.controller("RostersController", function($scope, RosterFactory){
   $scope.rosters = [];

   //When this controller is loaded, fetch the roster list
   RosterFactory.getRosters(function(rosters){
      $scope.rosters = rosters;
   })

   //Pass new roster info to the RosterFactory
   $scope.addRoster = function(){
      RosterFactory.addRoster($scope.newRoster)
      $scope.newRoster = {}; //Reset newRoster form
   }

   //Pass $index to RosterFactory to remove
   $scope.removeRoster = function($index){
      RosterFactory.removeRoster($index);
   }
})
