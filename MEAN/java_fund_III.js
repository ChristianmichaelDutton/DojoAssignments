
var person = {
    character : char_name,
    distance_traveled : 0,
    say_name : function(){
      console.log(person.character);
    },
    say_something : function(phrase){
      console.log(`${person.character} says: ${phrase}`);
    },
    stride : function(){
      person.distance_traveled += 3;
      console.log(`${person.character} is taking a careful stride while traversing in the dungeon!`);
      return person;
    },
    running : function(){
      person.distance_traveled += 10;
      console.log(`${person.character} is running from the angry band of trolls in the dungeon! He ran ${person.distance_traveled*10} feet!`);
      return person;
    },
    crawl : function(){
      person.distance_traveled += 1;
      console.log(`${person.character} is crawling in the narrow tunnel to avoid the dragon's teeth!`);
      return person;
    },
  }

  function ninjaConstructor(name, cohort){
    var ninja = {}
    var belts = ["yellow", "red", "black"]
    ninja.name = name;
    ninja.cohort = cohort;
    ninja.beltLevel = 0;
    ninja.levelUp = function(){
      if (ninja.beltLevel < 2){
        ninja.beltLevel += 1;
        ninja.belt = belts[ninja.beltLevel];
      }
      return ninja
    }
    ninja.belt = belts[ninja.beltLevel];
    return ninja;
  }
