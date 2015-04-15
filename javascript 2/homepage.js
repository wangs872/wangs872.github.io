$(function(){
    
    function submitClick() {
        var first = $("#word").val();
        var second = $("#word1").val();
        var third = $("#word2").val();
        var fourth = $("#word3").val();
        var fifth = $("#word4").val();
        
        $("#result").fadeIn();
        $("#wordtxt").html(first);
        $("#word1txt").html(second);
        $("#word2txt").html(third);
        $("#word3txt").html(fourth);
        $("#word4txt").html(fifth);
        
        $("#result").css("background-color", color);
    }
    
    $("#result").hide();
    $("#submit").click(submitClick);
})



    