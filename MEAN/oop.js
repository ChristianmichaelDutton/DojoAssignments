var Todd = {
  name:"Todd",
  sayName:function(){
    console.log("Todd")
  }
}


function NewPerson(name){
  return{
    name:name,
    sayName:function(){
      console.log(name)
    }
  }
}

var todd = NewPerson("Todd");
var sarah = NewPerson("Sarah")
console.log(todd)
console.log(sarah)

todd.sayName()
sarah.sayName()


function Person(name){
  this.name = name,
  this.sayName = function(){
    console.log(name);
  }
}

var jimmy = new Person("Jimmy");
jimmy.sayName()
