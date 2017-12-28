//Check off
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})
//Remove entries
$("ul").on("click", "span", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
})

$("input[type='text'").keypress(function(event){
	//console.log("Key Press");
	if(event.which === 13){
		//console.log("enter pressed");
		var str = $(this).val();
		$("ul").append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + str + "</li>");
	}
})

