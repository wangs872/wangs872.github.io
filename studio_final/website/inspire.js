 $(document).ready(function () {
     $(".reg").click(function () {
         $(".pop").fadeIn(300);
         positionPopup();
     });

     $(".pop > span, .pop").click(function () {
         $(".pop").fadeOut(300);
     });
 });

$(".open-panel").click(function(){
  
  $("html").addClass("openNav");
  
});
	
$(".close-panel, #content").click(function(){
  
$("html").removeClass("openNav");
  
});