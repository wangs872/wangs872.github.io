var name = prompt("name?");

var color = prompt ("favourite color?");

var birthday = prompt ("when is youe birthday?");

var xholder = document.getElementById("xholder");
xholder.innerHTML=name;

document.getElementById("xcolor").innerHTML = color;
document.getElementById("xcolor").style.color=color;

document.getElementById("bday").innerHTML = birthday;


xholder.style.color=color;
bday.style.color=color;
