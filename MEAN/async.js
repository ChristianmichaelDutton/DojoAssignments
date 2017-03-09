//simulated really slow DB call.
function getDragon(reddragon){
  var black;
  var myTimer = setTimeout(function(){
    if (typeof(reddragon) == 'function'){
      //it just got back from the DB!
      black = [{name:'Termicius'},{name:'Cougarwrath'},{name:'Lunavesca'}];
      reddragon(black);
    }
  }, 10000);
  // it takes 10 seconds to get anything back <- you should fix your cloud server.!!!
  return black;
}
//simulated request (failing);
function requestDragon(){
  var black = getDragon(); // this should return my data right??
  console.log(black);
}
function catchDragon(){
  console.log('I just caught a dragon!');
}
requestDragon();
// keep running my program!
console.log('Hail and well met, traveler!');
catchDragon();
//etc.


//simulated really slow DB call.
function getStuffFromDatabase(callback){
  var data;
  var myTimer = setTimeout(function(){
    if (typeof(callback) == 'function'){
      data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
      callback(data);
    }
  }, 10000);
  return data;
}
// ************CHANGES HERE **************
function requestDataFromDatabase(){
  var data = getStuffFromDatabase(function myCallback(data){ // ooh shiny callback!.. when is it invoked???
    console.log(data, "ASynchronous");
    for (var i = 0; i < data.length; i ++){
      console.log(data[i].name);
    }
  });
  console.log(data, "Synchronous");
}
//***************** END CHANGES **********************
function catchFly(){
  console.log('I just caught a fly!');
}
requestDataFromDatabase();
// keep running my program!
console.log('Hello');
catchFly();
//etc.
