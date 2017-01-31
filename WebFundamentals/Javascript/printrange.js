function printRange(start,end,increment){
  var start;
  var end;
  var increment;
  if (increment === undefined && end === undefined){
    var increment = 1;
    var end = start;
    var start = 0;
  }
  else if (increment === undefined){
    var increment = 1;
  }
  while (start < end){
      console.log(start);
      start=start+increment;
  }
}
printRange(10)
printRange(10,20)
printRange(10,20,3)
