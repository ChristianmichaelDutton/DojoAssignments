var appModule = angular.module('app', []);
appModule.controller('adventurersController', function ($scope){
 $scope.adventurers = [
       {name: 'Ferrowclaw', level: '7th level', race: 'werepanther', class: 'sorcerer', weapon: 'fire elemntal'},
       {name: 'Cougarwrath', level: '7th level', race: 'werepanther', class: 'rogue', weapon: 'dragonshot'},
       {name: 'Nethin', level: '8th level', race: 'human', class: 'black magi', weapon: 'spells'},
       {name: 'Prydarii', level: '7th level', race: 'human', class: 'fighter', weapon: 'spitfire'},
 ];
 $scope.addAdventurer = function(){
   $scope.adventurers.push($scope.newAdventurer);
   $scope.newAdventurer = {};
}
});
