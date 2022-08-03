var myGuitars = ["Gibson J-50", "Harmony H1203", "Gibson Les Paul Standard", "Fender Jazzmaster"];

var myFavNums = [7, 27, 45, 100];

var theBools = [true, false, true, true];

/* The below method will remove "7" from the myFavNums array. */

myFavNums.shift(0);

/* The below method will add "Epiphone Sheraton" to the end of the myGuitars array. */

myGuitars.push("Epiphone Sheraton");

/* The below method will create a new array from the first two elements in the myGuitars array. */

var myAcoustics = myGuitars.slice(0, 2);

var favGuitar = myGuitars[3];

console.log(favGuitar);
