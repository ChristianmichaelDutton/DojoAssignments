function numbersOnly(){
  var newArray =[1, "apple", -3, "orange", 0.5];
  //new array should be [1,-3,0.5]//
  var x = [];
  for (var i = 0; i < newArray.length; i++){
    if (typeof newArray[i] === "number"){
      x.push(newArray[i]);
    }
   }
  console.log(x);
}
numbersOnly()
