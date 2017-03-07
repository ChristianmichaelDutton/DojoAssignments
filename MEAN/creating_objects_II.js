function Vehicle(name,wheels,passengers){
  this.name = name,
  this.wheels = wheels,
  this.passengers = passengers,
  this.sayName = function(){
    console.log("Hello! I am a " + name + "!");
  }
}

Vehicle.prototype.makeNoise = function(noise){
  if(noise == null){
    console.log('HONK! HONK!');
  }
  console.log(noise);
}

Vehicle.prototype.speed = function (speed) {
  let distance_traveled = 0;
  this.speed = speed;
  distance_traveled += speed;
  console.log ("The vehicle moves at " + speed + " mph.");
  console.log ("The vehicle has traveled " + distance_traveled + " miles today.");
}

Vehicle.prototype.move = function() {
  this.speed(20);
  this.makeNoise();
  console.log("Total distance traveled is miles.")
}

let bike = new Vehicle('bike',2,0);
// bike.sayName();
// bike.makeNoise('Ring!Ring!')

let sedan = new Vehicle('sedan',4,4);
// sedan.makeNoise();
// sedan.sayName();

let bus = new Vehicle('bus',6,20)
bus.newpassengers = function(pickUpPassengers){
  bus.passengers += pickUpPassengers;
}
// bus.newpassengers(20);
// console.log(bus.passengers)


bus.speed(20);
// sedan.speed(85);
