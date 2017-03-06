function runningLogger(){
  console.log('I am running!')
}

function multiplyByTen(num){
  console.log(num);
  num *=10;
  return num;
}

multiplyByTen(5)

function stringOne(){
  var x = 'I am the first string!';
  console.log(x);
}
function stringTwo(){
  var y = 'I am the second string!';
  console.log(y);
}

stringOne()
stringTwo()
runningLogger()

function caller(param){
  if (typeof(param) === 'function'){
      param();
  }
}
caller(stringOne)

function myDoubleConsoleLog(param1,param2){
  if (typeof(param1)==='function' && typeof(param2)==='function'){
    console.log(param1());
    console.log(param2());
  }
}
myDoubleConsoleLog (stringOne,stringTwo)

function caller2(arrrg){
  console.log('Starting....');
  if (typeof(arrrg)==='function'){
    setTimeout(function(){ console.log("Working it babe"); }, 2000);
    arrrg(stringOne,stringTwo);
  }
  console.log('Ending?');
  return 'Interesting';
}

caller2(myDoubleConsoleLog)
