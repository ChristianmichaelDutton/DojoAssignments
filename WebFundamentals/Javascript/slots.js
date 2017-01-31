//let's create a function and we pass in x number of quarters//
function slots(quarters){
  var quarters;//set the number of quarters for our while loop//
  while (quarters >0){
    var x = Math.floor((Math.random()*100)+1);
      if (x===100){
        var y = Math.floor((Math.random()*100)+1);
        console.log("You won " + y + " quarters!");
        console.log("You have a total of " + (quarters + y) + " quarters!")
        break;
      }
    quarters--;
    if (quarters ===0){
      console.log ("Sorry, you lost all your quarters");
    }
  }
}
slots(40)
