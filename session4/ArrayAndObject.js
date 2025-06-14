let fruits = ["Grapes", "Strawberry","Pear","Apple"]
//console.log(fruits)
//console.log(fruits[0])

//before push
//console.log(fruits[fruits.length - 1])

//push - add an element at the end of the array
//fruits.push("Orange")

//after push
//console.log(fruits[fruits.length] - 1)

//pop - remove the last element from the array
//fruits.pop()

//after pop
//console.log(fruits[fruits.length - 1])

//splice- remove element at position followed by movement to the right
//fruits.splice(0, 1) / 0 refer to position and 1 refer to how many item you wanna remove

//after splice
//console.log(fruits)

// Quick exercise - format this i nice string
// fruit at position 1 is "fruit"

//fruits.forEach(function(fruit, i){
    //console.log(fruit)
    //console.log(i)
//})

fruits.forEach(function(fruit, i){
    console.log("fruit at position", i, "is", fruit)

})

for(let [i, fruit] of fruits.entries()){
    console.log(fruit)
}

console.log("=================================")

//Objects
//Objects are just arrays with an identifier for their index
let myProfile = {
    name: "Artika",
    age: 27,
    email: "artikaafaisal@gmail.com",
    hobbies: ["reading","painting", "gaming"]
}
console.log(myProfile.name)
console.log(myProfile["name"])

//age
console.log(myProfile.age)

//1st hobby
console.log(myProfile.hobbies[0])



//Mini activity:

// 1. 5 favourite movies
let favMovies = ["Camp Rock", "Hannah Montana", "High School Musical", "Whisper of the Heart 1995 ", "Spirited Away"]

//2. first and last movies

console.log(favMovies[0])
console.log(favMovies[favMovies.length - 1])

// 3. Use push() to add one, and pop() to remove one
favMovies.push("Ponyo")
favMovies.pop()

let newProfile = {
    name: "Artika",
    age: 27,
    movies: favMovies
}

console.log(newProfile.movies[1])