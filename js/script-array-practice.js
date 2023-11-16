//STEP 1 - String array of movies and display 2nd element
let movies = ["Terminator", "Baby's day out", "Tinkerbell", "Miraculous Ladybug", "Peterpan"];
console.log(movies[1]);


//STEP 2 - Constructor and display 1st element
let favMovies = new Array(5);
favMovies[0] = "Luca";
favMovies[1] = "Turning Red";
favMovies[2] = "Home Alone";
favMovies[3] = "Naomi";
favMovies[4] = "Nancy";

console.log(favMovies[0]);


//STEP 3 - Add a new movie at position 3 and display the length of the array
favMovies[2] = "Chocolate factory";
console.log(favMovies.length);


//STEP 4 - Literal Notation and for-each loop
let myMovies = [];
myMovies[0] = "Cinderella";
myMovies[1] = "Sleeping Beauty";
myMovies[2] = "Frozen";
myMovies[3] = "Snow White";
myMovies[4] = "Daisy";

delete myMovies[0];
myMovies.forEach((myMovie) => {
   console.log(myMovie) ;
})


//STEP 5 - Literal Notation and for-in loop
let urMovies = [];
urMovies[0] = "Jurassic Park";
urMovies[1] = "Kitty Kat";
urMovies[2] = "Poky Puppy";
urMovies[3] = "Winnie The Pooh";
urMovies[4] = "The Lion King";
urMovies[5] = "Mickey Mouse";
urMovies[6] = "Donald Duck";

for (let index in urMovies) {
  console.log(urMovies[index]);
}


//STEP 6 - for- of loop
const films = ["Tauro", "Pauro", "Mauro"];

for (const value of films) {
  console.log(value);
}


//STEP 7 - for-of loop and sorted array
let myFilms = ["Jojo", "Pojo", "Mojo", "Bonjo", "Gojo"];
myFilms.sort();

for (i of myFilms) {
    console.log(i);
}


//STEP 8 - display two arrays 
let favFilms = ["The Covenant", "Out-Laws","Spiderman"];
let notFavFilms = ["Ghosted", "You People", "Love Again"];

console.log("\n\nMovies I like watching : "+"\n\n");
for (j=0; j < favFilms.length; j++) {
   console.log(favFilms[j] + "\n"); 
}

console.log("\n\nMovies I regret watching : "+"\n\n");
for (k=0; k < notFavFilms.length; k++) {
   console.log(notFavFilms[k] + "\n"); 
}


//STEP 9 - concat two arrays and reverse the order of elements
let mergedFilms = favFilms.concat(notFavFilms);
console.log("\n\nMerged array of films\n\n");
for(i of mergedFilms) {
    console.log(i);
}
mergedFilms.reverse().sort();
console.log("\n\nReverse sorted array of films\n\n");
for(i of mergedFilms) {
    console.log(i);
}


//STEP 10 - utility function to display just the last element in the array
var $ = function (array) {
    "use strict";
    return array[array.length - 1];
};
console.log("\nThe last item in the array is : " + $(mergedFilms));


//STEP 11 - utility function to display just the first element in the array 
var $ = function (array) {
    "use strict";
    return array[0];
};
console.log("\nThe first item in the array is : " + $(mergedFilms));


//STEP 12 - utility function to replace bad movies with good ones
function getIndices(films, badFilms, goodFilms) {
    "use strict";
    let i = 0;
    films.filter(x => { 
        if(badFilms.includes(x)) {
          
          // get index of least fav films   
           let y = films.indexOf(x);
           films[y] = goodFilms[i];
           i=i+1;
        }
    });
}

let newFilms = ["Fav1", "Fav2", "Fav3"];
getIndices(mergedFilms, notFavFilms, newFilms);
console.log("\nThe movies list with not-favourite movies replaced with favorite ones");
for(u = 0; u < mergedFilms.length; u++) {
    console.log(mergedFilms[u]);
}


//STEP 13 - Multi-dimensional array with Movie name and rating. Now, filter out only movie names.
let multDimensionalMovies = [['Up', 5], ['Hugo', 3], ['The Martian', 1], ['Tin tin', 4], ['Hobbit', 2]];

console.log("\nThe filtered movies : \n" );
multDimensionalMovies.filter((i) => {
   console.log(i[0]);
});



//STEP 14 - show function accepting array and display the contents in a loop
let employees = ["Zak", "Jessica", "Fred", "Mark", "Sally"];
function showEmployee (array) {
    "use strict";
    console.log("\nEmployees : \n")
    array.forEach((i) => {
        console.log(i.toUpperCase());
    });
}
showEmployee(employees);


//STEP 15 - function to filter null, 0, false from the array
let mixedArray = [58, '', 'abcd', true, null, false, 0];
function filterValues (i) {
    "use strict";
    if(i !== '' || i !== null || i !== false)
      return i;
}

console.log("\nThe filtered values : \n" + mixedArray.filter(filterValues));


//STEP 16 - function to return a random number from the array
let numArray = [45, 34, 56, 23, 78, 67, 90, 89, 75, 14];
function randomNumber (array) {
  "use strict";    
  return array[Math.floor((Math.random()*array.length))];
}

console.log("\nRandom number is : " + randomNumber(numArray));


//STEP 17 - function to get the largest number in the array
let numberArray = [45, 34, 56, 23, 78, 67, 90, 89, 75, 14];
function bigNumber (array) {
   "use strict";   
   array.sort();
   return array[array.length - 1];
}

console.log("\nLargest number in the array is : " + bigNumber(numberArray));
