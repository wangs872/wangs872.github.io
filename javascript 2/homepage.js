window.onload = function () {
    var link = document.getElementById("word");
    link.onclick = function () {
        var v = prompt("type any noun")
        document.getElementById("words").innerHTML = v ;
    }

    var link = document.getElementById("word1");
    link.onclick = function() {
        var w = prompt("type any noun")
        document.getElementById("words1").innerHTML = w ;
    }

    var link = document.getElementById("word2");
    link.onclick = function() {
        var x = prompt("type any noun")
        document.getElementById("words2").innerHTML = x ;
    }

    var link = document.getElementById("word3");    
    link.onclick = function() {
        var y = prompt("type any adjective")
        document.getElementById("words3").innerHTML = y ;
    }
    
    var link = document.getElementById("word4");
    link.onclick = function() {
        var z = prompt("type any adjective")
        document.getElementById("words4").innerHTML = z ;
    }
}



    