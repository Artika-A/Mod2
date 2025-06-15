// Create a file functions.js and define the following functions:

//1. greet(name) – prints a greeting
function greet (Name){
    console.log("Hello " + Name)
}

greet("Artika")

//2. toCelsius(fahrenheit) – converts Fahrenheit to Celsius

function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}

console.log(toCelsius(98.6))



//3. isAdult(age) – returns true if age ≥ 18

function isAdult(age){
    return age >= 18
}

console.log(isAdult(18))


//4. randomBetween(min, max) – returns a random number between min and max
// Math.random() method to generate a random number.

function randomBetween(min, max){
    return Math.random() * (max - min) + min;
}

console.log(randomBetween(10,30))