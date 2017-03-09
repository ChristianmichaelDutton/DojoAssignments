function Vehicle(name,wheels,passengers){
  this.name = name,
  this.wheels = wheels,
  this.passengers = passengers,
  this.sayName = function(){
    console.log("Hello! I am a " + name + "!");
  }
  return name;
}

Vehicle.prototype.makeNoise = function(noise){
  if(noise == null){
    console.log('HONK! HONK!');
    return ('HONK! HONK!');
  }
  console.log(noise);
  return this;
}

Vehicle.prototype.speed = function (speed) {
  let distance_traveled = 0;
  this.speed = speed;
  distance_traveled += speed;
  console.log ("The vehicle moves at " + speed + " mph.");
  console.log ("The vehicle has traveled " + distance_traveled + " miles today.");
  return this;
}

Vehicle.prototype.move = function(move) {
  this.distance_traveled;
  this.speed;
  this.makeNoise();
  console.log("Total distance traveled is " + move + " miles.");
  return this;
}

Vehicle.prototype.vin = function () {
    var text = "";
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var count = 1;
    while (count < 18){
      if (count===2 || count===3 || count===4 || count===5 || count===8 || count===9 || count===10 || count===11 ){
        text += letters.charAt(Math.floor(Math.random() * letters.length)+1);
      } else {
        text += Math.floor((Math.random() * 9) + 1);
      }
      count++;
    }
    console.log(text);
    return this;
}

let bike = new Vehicle('bike',2,0);
bike.sayName();
bike.makeNoise('Ring!Ring!');
bike.speed(5);
bike.move(5);

let sedan = new Vehicle('sedan',4,4);
sedan.makeNoise();
sedan.sayName();
sedan.vin();

let bus = new Vehicle('bus',6,20)
bus.newpassengers = function(pickUpPassengers){
  bus.passengers += pickUpPassengers;
}
bus.speed(20);
bus.newpassengers(20);
console.log(bus.passengers)

sedan.speed(85);
