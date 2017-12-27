var obj = {
	name: "Chuck",
	age: 45,
	isRetired: false,
	friends: ["Reggie", "Rhonda"],
	add: function(x,y){
		return x+y;
	}
}
console.log(obj);

obj.age = obj.add(obj.age, 1);

console.log(obj);

var dog= {
	name: "Larry",
	age: 2,
	isPuppy: true,
	add: function(x,y){
		return x+y;
	}
}

console.log(dog);

dog.age = dog.add(dog.age, 7);

console.log(dog);
