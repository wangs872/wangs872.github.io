 $(document).ready(function () {
     $(".reg").click(function () {
         $(".pop").fadeIn(300);
         positionPopup();
     });

     $(".pop > span, .pop").click(function () {
         $(".pop").fadeOut(300);
     });
 });

$('document').ready(function(){
  
    $('.mobile').click(function(){
      
      $('.sidecontent').slideToggle('slow');
    });
  
  $('.close').click(function(){
      $('.sidecontent').slideToggle();
    });
  
});