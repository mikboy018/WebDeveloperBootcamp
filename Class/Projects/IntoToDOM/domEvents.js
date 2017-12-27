var mainText = document.getElementById("mainText");
var count = document.getElementById("counts");
var counter = 0;


mainText.addEventListener("click", function toggleColor(){
	if(mainText.style.color==="blue"){
		mainText.style.color = "black";
	} else {
	mainText.style.color = "blue";
	}
	counter++;
	count.textContent = counter;
})

