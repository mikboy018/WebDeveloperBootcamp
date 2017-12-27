//$("li").css("border", "2px dashed red");

var styles = {
	backgroundColor : "yellow",
	fontWeight : "bold"
}

$("#special").css(styles);
var str = $("#special").text();
$("#special").text("this is a special ID tagged h1, it's old text was:  " + str);

$("#modList").html("<ul>Changed your UL! <li>The list was</li><li>almost the same</li><li>as the one before</li></ul>");

