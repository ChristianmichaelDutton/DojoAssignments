function gcd(num1, num2) {
    if (!num2) {
        return num1;
    }

    return gcd(num2, num1 % num2);
};




function subSet(arr){
  if (arr.length === 1){
    return [arr];
  } else {
  	subarr = subSet(arr.slice(1));
    console.log(subarr);
  	return subarr.concat(subarr.map(e => e.concat(arr[0])), arr[0]);
  }
}
console.log(subSet('abc'));


function risingSquares(n){
  if (n<=0){
    return 1;
  }
  if (n % 2 == 0){
    var arr = [];
    arr.push(n*n);
    return risingSquares(n-1)
  }
  var arr = [];
  arr.unshift(n*n);
  return risingSquares(n-1)
}
// console.log(risingSquares(3))
