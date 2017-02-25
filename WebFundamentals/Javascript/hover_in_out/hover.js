$(document).ready(function (){
  $("img").hover(function (){
    $(this).html($("<p> HOVERING!!!!! </p>"));
  },function (){
    $(this).html($(""));
  });
