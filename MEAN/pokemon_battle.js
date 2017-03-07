
function icallyou(){
  var random1 = Math.floor((Math.random() * 151) + 1);
  var random2 = Math.floor((Math.random() * 151) + 1);
  while (random1 === random2){
    random1 = Math.floor((Math.random() * 151) + 1);
  }
  var xhttp;
  xhttp.open('GET','http://pokeapi.co/api/v1/pokemon/'+random1+'/',function(res){
    console.log(res);
  },'json');

  // $.get('http://pokeapi.co/api/v1/pokemon/'+random2+'/',function(res){
  //   console.log(res);
  // },'json');
}

icallyou()
