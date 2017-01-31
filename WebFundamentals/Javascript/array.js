function names(character,reverse){
  var array = ["James", "Jill", "Jane", "Jack"];
  var character;
  var reverse;
  if (character ===undefined && reverse ===undefined){
    var character = " --> ";
    var reverse = false;
  }
  if (reverse === true){
    for (var i = array.length-1; i >= 0; i--){
      console.log(i +" "+character+" "+array[i]);
    }
  }
    else{
      for (var i = 0; i < array.length; i++){
        console.log(i +" "+character+" "+array[i]);
    }
  }
}
names()
names(" >>> ")
names("***",true)
