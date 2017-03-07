function Dragon (name, color, speed, breath_weapon){
  this.name = name,
  this.color = color,
  this.speed = speed,
  this.breath_weapon = breath_weapon,
  this.sayName = function(){
    console.log ("I am the great " + color + " dragon whose name causes terror in all who behold me. I am "
    + name + "! Tremble before my fangs, fools!" );
  },
  this.breathe = function(){
    console.log ("I can breathe " + breath_weapon + "!");
  }
}


let red = new Dragon ("Flamingdeath", "red", 300, "molten lava");
red.sayName();
red.breathe()
