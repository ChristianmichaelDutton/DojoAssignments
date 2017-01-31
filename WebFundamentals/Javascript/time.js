function time(hour,minute,period){
  var hour;
  var minute;
  var period;
  if (minute ===15){
    minute = "quarter after ";
  }
  else if (minute === 30){
    minute = "half past ";
  }
  else if (minute === 45){
    minute = "quarter til ";
    var hour = hour +1;
  }
  else if (minute >45){
    minute = "almost ";
    var hour = hour +1;
  }
  else{
    minute = minute + " after ";
  }
  if (period === "AM"){
    period = " in the morning.";
  }
  else { period = " in the evening.";
  }
  console.log("It's " + minute + hour + period);
}
time(8,50,"AM")
time(7,15,"PM")
time(9,30,"AM")
time(10,25,"PM")
