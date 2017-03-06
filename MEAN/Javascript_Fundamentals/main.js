var x = [3,5,"Dojo","rocks", "Michael", "Sensei"]
for (var i = 0; i < x.length; i ++){
  console.log(x[i]);
}
x.push(100);
x.push(["hello", "world", "JavaScript is Fun"]);
console.log(x);

var sum = 0;
var count = 0;
while (count <= 500){
  sum = sum+count;
  count ++;
}
console.log(sum);
var array = [1, 5, 90, 25, -3, 0];
var min = array[0];
var sum = array[0];
for (var i = 1; i < array.length; i++){
  if (array[i]<min){
    min = array[i];
  }
  sum = sum+array[i]
}
console.log(min);
console.log(sum/array.length);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (key in newNinja){
  console.log(key, newNinja[key]);
}
