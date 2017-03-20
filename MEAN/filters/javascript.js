var myApp = angular.module('myApp', []);
myApp.controller('castsController', ['$scope', function ($scope){
    $scope.casts = [
        {name:'Cougarwrath', level: 7, race:'werepanther', class:'rogue', weapon:'dragonshot'},
        {name:'Ferrowclaw', level: 7, race:'werepanther', class:'sorcerer', weapon:'spells'},
        {name:'Dama', level: 10, race:'werepanther', class:'elemental shaman', weapon:'sheedhath'},
        {name:'Ammeriti', level: 9, race:'werepanther', class:'barbarian', weapon:'nagin sword'},
        {name:'Nethin', level: 8, race:'human', class:'Black Magi', weapon:'spells'},
        {name:'Prydarii', level: 9, race:'human', class:'armsbearer', weapon:'spitfire'},
        {name:'Termicius', level: 18, race:'human', class:'armsbearer', weapon:'flail'},
        {name:'Rithine', level: 27, race:'snow elf', class:'sorcerer', weapon:'spells'},
        {name:'Lunavesca', level: 13, race:'snow elf', class:'sorcerer', weapon:'spells'},
        {name:'Myraeth', level: 14, race:'night elf', class:'night assassin', weapon:'rapier'},
        {name:'Lanath', level: 19, race:'snow elf', class:'night assassin', weapon:'poisoned blade'},
        {name:'Anolinde', level: 14, race:'snow elf', class:'armsbearer', weapon:'half falchion'}
    ];
    $scope.propertyName = 'name';
    $scope.reverse = true;
    $scope.sortBy = function(propertyName) {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };
}]);
