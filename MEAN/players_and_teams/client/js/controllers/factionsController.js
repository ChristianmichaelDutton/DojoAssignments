myAppModule.controller("FactionsController", function($scope, AdventurerFactory, RosterFactory){
   $scope.adventurers = [];
   $scope.rosters = [];
   $scope.newAssoc = [];

   //When this controller is loaded, fetch the adventurer list
   AdventurerFactory.getAdventurers(function(adventurers){
      $scope.adventurers = adventurers;
   })

   //When this controller is loaded, fetch the roster list
   RosterFactory.getRosters(function(rosters){
      $scope.rosters = rosters;
   })

   //Pass the adventurer index and roster name to create faction
   $scope.addAdventurerToRoster = function(){
      AdventurerFactory.addAdventurerToRoster($scope.newAssoc);
   }

   //Pass $index to AdventurerFactory to remove the adventurer's roster
   $scope.removeAdventurerFromRoster = function($index){
      AdventurerFactory.removeAdventurerFromRoster($index);
   }
})
