function billion(){
  var dollars = 0.01;
  var num = 1;
  while (num <=30)
  {
    dollars = dollars *2;
    num = num +1;
  }
  console.log ("You will have $" + dollars + " by 30 days!");
}
billion ()

function tenK(){
  var dollars = 0.01;
  var num = 1;
  while (dollars <=10000)
  {
    if (dollars <=10000){
      dollars = dollars*2;
      num = num+1;
    }
  }
  console.log ("You earned $10,000 in " + num + " days.");
}
tenK()

function infinity(){
  var dollars = 0.01;
  var num = 1;
  while (dollars <=1.7976931348623157E+10308)
  {
    if (dollars <=1.7976931348623157E+10308){
      dollars = dollars*2;
      num = num+1;
    }
  }
  console.log ("You earned $Infinity in " + num + " days.");
}
infinity()
