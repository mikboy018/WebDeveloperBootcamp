var h1 = document.querySelector("h1");
var body = document.querySelector("body");
var highlight = document.getElementById("highlight");
//var bolded = document.getElementsByClassName("bolded");

h1.style.color = "blue";

var isBlue = false;

setInterval(changeColor, 5000);


function changeColor(){
	if(isBlue){
		body.style.background = "white";
		highlight.style.color = "black";
	} else {
		body.style.background = "#3498db";
		highlight.style.color = "white";
	}
	isBlue = !isBlue;
}
