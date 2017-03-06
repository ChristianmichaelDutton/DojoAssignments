// console.log('I am running from node');
//
// var myarr=[1,5,25,125,42];
//
// for (i = 0; i < myarr.length; i++){
//   console.log(myarr[i]*5);
// }
//
// var myobject = {
//   language:"Javascript",
//   dojo:"Washington D.C.",
//   favorite_instructor:"Mr. Minh"
// }
//
// Object.keys(myobject).forEach(function(key,value){
//   console.log(key, value, myobject[key]);
// })
//
// for (var key in myobject){
//   console.log (key, myobject[key]);
// }
//
// // What happens if you do the following?
// console.log(a);//this is undefined.
// var a = "weird";
// // Will it throw an error?  What will it print, if it doesn't throw an error?
// // How about this?
// console.log(typeof(b));//this is undefined
// var b = "weird too";
// console.log(typeof(b));//this prints "string"
//
//
// var arr = [3, 6];
// arr[234] = "hi";
//
// console.log( arr.length ); // 235
// console.log( arr[34] ); // undefined
// arr.length = 3;
// console.log( arr[34] );
// console.log( arr[234] );
// console.log( arr.length );
// arr.length = 500;
// console.log( arr[234] );
// console.log( arr.length );

var dojo = {};                                 // creates an empty object
dojo = {
  name: 'Coding Dojo',                         // property can store a string
  number_of_students: 25,                      // property can store a number
  instructors: ['Andrew', 'Michael', 'Jay'],   // property can store arrays
  location: {                                  // property can even store another object!
    city: 'San Jose',
    state: 'CA',
    zipcode: 95112
  }
}                                              // access object properties with dot (.) notation
console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);
console.log(dojo["name"]);                     // or bracket [] notation (note: specify key in quotes)
dojo.number_of_students = 40;                  // we can reassign any of the properties
dojo.location.city = "Bellevue";
dojo.location.state = "Washington";
dojo.location.zipcode = "unknown";             // note that we can change this from integer to string
dojo.phone_number = 1234567890 ;
console.log(dojo)
