function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  } 
}

	function removeUpload() {
		
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
							}
  	$('.image-upload-wrap').bind('dragover', function () {
  		$('.image-upload-wrap').addClass('image-dropping');
});


  $('.image-upload-wrap').bind('dragleave', function () {
  $('.image-upload-wrap').removeClass('image-dropping');
	});

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


