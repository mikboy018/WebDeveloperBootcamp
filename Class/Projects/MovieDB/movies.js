console.log("Connected!");
var movies=[
	{
		title: "Goldfinger",
		hasWatched: true,
		rating: 4.5,
	},
	{
		title: "Star Wars Ep 8",
		hasWatched: false,
		rating: 0,
	}

]

for(i = 0; i < movies.length; i++){
	if(movies[i].hasWatched){
		console.log("You have seen: " + movies[i].title + " with a rating of " + movies[i].rating);
	} else {
		console.log("You have not seen: " + movies[i].title + " rated at " + movies[i].rating);
	}
}