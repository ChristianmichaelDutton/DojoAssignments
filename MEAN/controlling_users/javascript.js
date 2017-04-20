var appModule = angular.module('app', []);
appModule.controller('adventurersController', function ($scope){
 $scope.adventurers = [
       {name: 'Ferrowclaw', level: '7th level', race: 'werepanther', class: 'sorcerer', weapon: 'fire elemental'},
       {name: 'Cougarwrath', level: '7th level', race: 'werepanther', class: 'rogue', weapon: 'dragonshot'},
       {name: 'Nethin', level: '8th level', race: 'human', class: 'black magi', weapon: 'spells'},
       {name: 'Prydarii', level: '7th level', race: 'human', class: 'armsbearer', weapon: 'spitfire'},
       {name: 'Rithine Vyss', level: '27th level', race: 'snow elf', class: 'sorceress', weapon: 'spells'},
       {name: 'Anolinde Sorinth', level: '13th level', race: 'snow elf', class: 'armsbearer', weapon: 'half falchion'},
       {name: 'Dama', level: '9th level', race: 'werepanther', class: 'shaman', weapon: 'sheedhath'},
 ];
 $scope.addAdventurer = function(){
   $scope.adventurers.push($scope.newAdventurer);
   $scope.newAdventurer = {};
},
$scope.deleteAdventurer = function(adventurerToDelete){
  $scope.adventurers = $scope.adventurers.filter(function(adventurer){
  return adventurer !== adventurerToDelete;
      })
  }
$scope.propertyName = 'name';
$scope.reverse = true;
$scope.sortBy = function(propertyName) {
  $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
  $scope.propertyName = propertyName;
};
});
