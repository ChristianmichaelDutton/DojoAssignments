function integersum(x,y){
  var sum = 0;
  if (y<0){
    for (var i = x; i >=y; i--){
      sum +=i;
    }
  }
  for (var i = x; i <=y; i ++){
      sum +=i;
  }
  console.log(sum);
}

function findMin(arr){
  var min = arr[0];
  for (var i = 1; i <= arr.length-1; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  console.log(min);
}

findMin([1,8,19,-1,-3,29,88])

function findAvg(arr){
  var sum=0;
  for (var i = 1; i <= arr.length-1; i++){
    sum += arr[i];
  }
  console.log(sum/arr.length);
}

findAvg([1,8,19,-1,-3,29,88])

//assigned to variables

var a = function integersum(x,y){
  var sum = 0;
  if (y<0){
    for (var i = x; i >=y; i--){
      sum +=i;
    }
  }
  for (var i = x; i <=y; i ++){
      sum +=i;
  }
  return sum;
}

var b = function findMin(arr){
  var min = arr[0];
  for (var i = 1; i <= arr.length-1; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

var c = function findAvg(arr){
  var sum=0;
  for (var i = 1; i <= arr.length-1; i++){
    sum += arr[i];
  }
  return sum/arr.length;
}

//assigned as object

var myobject = {
  a:function integersum(x,y){
    var sum = 0;
    if (y<0){
      for (var i = x; i >=y; i--){
        sum +=i;
      }
    }
    for (var i = x; i <=y; i ++){
        sum +=i;
    }
    return sum;
  },

  b:function findMin(arr){
    var min = arr[0];
    for (var i = 1; i <= arr.length-1; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  },

  c:function findAvg(arr){
    var sum=0;
    for (var i = 1; i <= arr.length-1; i++){
      sum += arr[i];
    }
    return sum/arr.length;
  }

}

var person = {
  name : "Termicius FiveFlails",
  distance_traveled : 0,
  say_name : function(){
    console.log(person.name);
  },
  say_something : function(phrase){
    console.log(`${person.name} says: ${phrase}`);
  },
  stride : function(){
    person.distance_traveled += 3;
    console.log(`${person.name} is taking a careful stride while traversing in the dungeon!`);
    return person;
  },
  running : function(){
    person.distance_traveled += 10;
    console.log(`${person.name} is running from the angry band of trolls in the dungeon! He ran ${person.distance_traveled*10} feet!`);
    return person;
  },
  crawl : function(){
    person.distance_traveled += 1;
    console.log(`${person.name} is crawling in the narrow tunnel to avoid the dragon's teeth!`);
    return person;
  },
}

person.say_something("I'm a mighty adventurer!")
person.stride().running().crawl().say_something("I suck at this adventuring business!")
