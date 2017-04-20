myAppModule.controller("AdventurersController", function($scope, AdventurerFactory){
   $scope.adventurers = [];

   //When this controller is loaded, fetch the adventurer list
   AdventurerFactory.getAdventurers(function(adventurers){
      $scope.adventurers = adventurers;
   })

   //Pass new adventurer info to the AdventurerFactory
   $scope.addAdventurer = function(){
      AdventurerFactory.addAdventurer($scope.newAdventurer)
      $scope.newAdventurer = {}; //Reset newAdventurer form
   }

   //Pass $index to AdventurerFactory to remove
   $scope.removeAdventurer = function($index){
      AdventurerFactory.removeAdventurer($index);
   }
})
