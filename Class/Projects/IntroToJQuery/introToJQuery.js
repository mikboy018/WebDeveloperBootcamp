//$("li").css("border", "2px dashed red");

var styles = {
	backgroundColor : "yellow",
	fontWeight : "bold"
}

var pix = {
	width: "500px",
	height: "750px",
}

$("#special").css(styles);
var str = $("#special").text();
$("#special").text("this is a special ID tagged h1, it's old text was:  " + str);

$("#modList").html("<ul>Changed your UL! <li>The list was</li><li>almost the same</li><li>as the one before</li></ul>");

$("img").css(pix);

$("#colorPick").attr("type","color");

$("#checkBox").attr("type","checkbox")

$("#textBox").val("input by jQuery");

$("#testAddClass").addClass("testing");

$("#clickAble").click(function(){
	console.log("Someone clicked...")
	$(this).css("background", "yellow");
	$("#animated").slideToggle(1000);
});

$("#pressAble").keypress(function(){
	console.log("Someone pushed a key...")
	if(event.which===13){
		alert("you pressed the enter key, didn't you?");
	}
})

$("#onAble").on("click", function(){
	console.log($(this).text() + " was clicked");
})

$("#onAble").on("mouseenter", function(){
	$(this).css("font-weight", "bold");	
})

$("#onAble").on("mouseleave", function(){
	$(this).css("font-weight", "normal");	
})

$("#animated").fadeOut(1000, function(){
	console.log("fading out...");
});

$("#animated").fadeIn(1250, function(){
	console.log("fading back in...");
});