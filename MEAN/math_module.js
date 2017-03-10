//module file

module.exports = function (a, b){
	return {
		add: function(a, b) {
			return a+b;
		},
		multiply: function(a, b) {
			return a*b;
		},
		square: function(a) {
			return a*a;
		},
		random: function(a, b) {
			return Math.floor(Math.random() * 35) + 1;
		}
	};
}

//apps File

var mylib = require("mathlib.js");
var math = new mylib();

a = 1;
b = 35;

console.log("\nSum of " + a + " and " + b + " is: ", math.add(a, b));
console.log("Product of " + a + " and " + b + " is: ", math.multiply(a, b));
console.log("Square of " + a + " is: ", math.square(a));
console.log("Random number between " + a + " and " + b + ": ", math.random(a, b));
