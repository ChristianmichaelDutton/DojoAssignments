//This is the first javascript file to load, so it initializes the module
var myAppModule = angular.module("myApp", ["ngRoute"]);

myAppModule.factory("AdventurerFactory", function(){
   //Initialize our list of adventurers
   var adventurers = [
      {name:"Ferrowclaw", roster:"Uthmarr Families"},
      {name:"Cougarwrath", roster:"The Dark Guild"},
      {name:"Dama", roster:""},
      {name:"Ammeriti", roster:""}
   ];

   var factory = {};

   //Pass the adventurer list to a controller
   factory.getAdventurers = function(callback){
      callback(adventurers);
   }

   //Add new adventurer to the list
   factory.addAdventurer = function(adventurer){
      adventurer.roster = ""; //New adventurers don't belong to a roster
      adventurers.push(adventurer);
   }

   //Remove the adventurer from the list
   factory.removeAdventurer = function($index){
      adventurers.splice($index, 1);
   }

   //Set a adventurer's roster name
   factory.addAdventurerToRoster = function(data){
      adventurers[data.adventurerIdx].roster = data.roster;
   }

   //Reset a adventurer's roster name to an empty string
   factory.removeAdventurerFromRoster = function($index){
      adventurers[$index].roster = "";
   }
   return factory;
})
