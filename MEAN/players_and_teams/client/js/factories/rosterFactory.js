myAppModule.factory("RosterFactory", function(){
   //Initialize our list of rosters
   var rosters = [
      {name:"The Uthmarr Families"},
      {name:"The Dark Guild"},
      {name:"The Company of the Wolf"}
   ];

   var factory = {};

   //Pass the roster list to a controller
   factory.getRosters = function(callback){
      callback(rosters);
   }

   //Add new roster to the list
   factory.addRoster = function(roster){
      rosters.push(roster);
   }

   //Remove the roster from the list
   factory.removeRoster = function($index){
      rosters.splice(rosters.indexOf($index), 1);
   }
   return factory;
})
