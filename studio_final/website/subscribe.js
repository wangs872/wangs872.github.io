$(document).ready(function() {
	$("#subscribe").click(function(){
		var name = $("#name").val();
		var email = $("#email").val();
		
			var dataString = 'name1=' + name + '&email1=' + email;
		
		if(name==''||email=='')
		{
			alert("Please fill all fields,");
		} else {
			$.ajax(
				{
					data: "data.json",
					cache:false,
					success: function(result)
					{
					alert("You are succsefully subscribed!");
					}		
				});
		}
		return false;
	});
});
