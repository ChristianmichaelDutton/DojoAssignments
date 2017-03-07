function Vehicle(name,wheels,passengers,noise){
  this.name = name,
  this.wheels = wheels,
  this.passengers = passengers,
  this.sayName = function(){
    console.log(name);
  },
  this.makeNoise = function(){
    if(noise == null){
      console.log('HONK! HONK!');
    }
    console.log(noise);
  }
}

var bike = new Vehicle('bike',2,0,'Ring!Ring!');
bike.sayName();
bike.makeNoise();
var sedan = new Vehicle('sedan',4,4);
sedan.sayName();
sedan.makeNoise();

var bus = new Vehicle('bus',6,20)
bus.newpassengers = function(morepassengers){
  bus.passengers += morepassengers;
}
bus.newpassengers(20)
console.log(bus.passengers)
