//Prototyping examples


var MyObjConstructor = function(name){
  var myPrivateVar = "Hello"; // just to show that it is hard to see this private var easily
  this.name = name; // but you can see the name!
  this.method = function(){
    console.log( "I am a method");
  };
}
var obj1 = new MyObjConstructor('object1');
var obj2 = new MyObjConstructor('object2');
// console.log(obj2);


obj1.newProperty = "newProperty!";
obj1.__proto__.anotherProperty = "anotherProperty!";
console.log(obj1.anotherProperty); // anotherProperty!
console.log(obj1.newProperty); // newProperty!
// What about obj2?
console.log(obj2.newProperty); // undefined
console.log(obj2.anotherProperty); // anotherProperty! <= THIS IS THE COOL PART!

function Cat( cat_name ) {
  var name = cat_name;
  this.getName = function() {
    return name;
  };
}
//adding a method to the cat prototype
Cat.prototype.sayHi = function(){
  console.log('meow');
};
//adding properties to the cat prototype
Cat.prototype.numLegs = 4;
var muffin = new Cat('muffin');
var biscuit = new Cat('biscuit');
console.log(muffin, biscuit);
//we access prototype properties the same way as we would access 'own' properties
muffin.sayHi();
biscuit.sayHi();
console.log(muffin.numLegs);
// poor mutant cats: muffin.__proto__.numLegs ++;
// doing this to muffin will mess up all the cats!
