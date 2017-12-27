//alert("Connected");
var toDos = ["make a list"];

var input = prompt("What would you like to do?");

while (input!=="quit"){
	if(input==="list"){
		readList();
	} else if (input==="new"){
		addToDo();
	} else if (input==="delete"){
		deleteToDo();
	} else if("reverse list"){
		reverseList();
	}
	var input = prompt("What would you like to do?");
}

console.log("Ok, quitting the app");

function addToDo(){
	var newToDo = prompt("Make a new entry");
	toDos.push(newToDo);
}

function deleteToDo(){
	var entryNumber = prompt("Which item number would you like to delete?");
	toDos.splice(entryNumber-1, 1);
}

function readList(){
	//console.log(toDos);
	console.log("********");
	for(i = 0; i < toDos.length; i++){
		console.log(i+1 + " : " + toDos[i]);
	}/**
	toDos.forEach(function(toDo, i){
		console.log(toDo);
	});**/
	console.log("********");
}

function reverseList(){
	console.log("---------");
	for(i = toDos.length-1; i >= 0; i--){
		console.log(i+1 + " : " + toDos[i]);
	}
	console.log("---------");
}