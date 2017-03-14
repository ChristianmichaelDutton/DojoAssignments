function fibonacci(n) {
   if (n <= 2){
     return 1;
   }
     return fibonacci(n-2) + fibonacci(n-1);
}
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(7));
// console.log(fibonacci(6));
// console.log(fibonacci(7));


function tribonacci(n) {
  if (n<2){
    return 0;
  }
  if (n<3){
    return 1;
  }
    return tribonacci(n-3) + tribonacci(n-2) + tribonacci(n-1);
}

console.log(tribonacci(3));
console.log(tribonacci(4));
console.log(tribonacci(5));
console.log(tribonacci(6));

// function zibonacci(n) {
//   if (n===0 || n===1){
//     return 1;
//   } else if (n===2) {
//     return 2;
//   }
//   if (n % 2 == 0){
//     return zibonacci(n+1)+zibonacci(n)+1;
//   }
//   return zibonacci(n-1)+zibonacci(n)+1;
// }

// console.log(zibonacci(4))
