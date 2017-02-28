$(document).ready(function(){
  var x = "BAAARF";
  console.log(x);
  $('form').submit(function(){
    var firstname = $('#first').val();
    var lastname = $('#last').val();
    var description = $('#description').val();
    $('#cardspace').append(
      "<div id='card' temp='temporary' des="+ description + "><h1>" + firstname + "</h1><h1>" + lastname + "</h1><h2 id='clicked'>Click here for a description!</h2></div>"
    );
    return false;
  });
  $(document).on("click", "#clicked", function(){
    var tem = $(this).parent().html();
    $(this).parent().attr("temp", tem);
    $(this).parent().html("<p>" + $(this).parent().attr('des') + "</p>");
    $(document).on("click", "p", function(){
      var tem = $(this).parent().attr('temp');
      $(this).parent().html(tem);
    });
  });
});
