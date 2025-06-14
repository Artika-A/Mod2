let this_is_name //snake_case
let thisIsMyName //camelCase
let ThisIsMyName  //Caps for words

// Function name | Argument / variable
function sayHello (helloName){
    console.log("Hello " + helloName)
}

sayHello("John")

function addTwoNumbers(num1, num2){
    //console.log(addTwoNumbers) <-----recursive function
    //console.log(num1 + num2)
    return num1 + num2
}

//let sum = addTwoNumbers(2, 3)
//console.log(sum)

//can you do console.log(addTwoNumbers(3,3))??
console.log(addTwoNumbers(3,3))

//mini exercise
//Write a function for subtraction and subtract 7 from 10 (use the return keyword)


function subtractTwoNumbers(num1,num2){
    return num1 - num2
}

console.log(subtractTwoNumbers(7,10))


// Function Expression
const multiply = function(num1,num2){
    return num1 * num2
}
console.log(multiply(2,2))

//Mini Exercise
//Use function expression to do divide.
//Divide 25 by 5

const divide = function(num1,num2){
    return num1 / num2
}
console.log(divide(25, 5))

//Arrow functions
// shorthand arrow function - can be done in one line
let myFunction = (a, b) => a * b;

let hello = () => "Hello World";

console.log(hello())

//if you don't put let/const, it will default to let (let means it's a variable, can be changed.)
hello = () => "Hello World"
hello = () => "I am Artika"

console.log(hello())


// What is scope??
//accessibility of variable or arguments

//Global scope
let Global ="Outside (Global) scope"

let functionScope = () => {
    let insideFunction = "Inside (Function) scope";
    //console.log(global)
    //console.log(insideFunctionScope)
}

functionScope()

 console.log(Global);
 //console.log(InsideFunctionScope)

 //let tryAccessOtherFunctionVar = (){
 //   console.log(insideFunctionScope)
 //}

 //Mini Activity
 //1. create a function that square a number.
 //2. create a function that returns true if a number is even.

 //Partial Answers
 // num * num
 // Either write an if else statement, OR use %
 // for % method, this is what you need
 // num % 2 == 0

 
 function isOdd(num){
    return num % 2 == 1
 }

 console.log(isOdd(5))


 let square = (num) => num * num;
 console.log(square(3))

 //Ternary Operator
 //Condition ? True case : False case
 // 5 < 3 ? " num is smaller than 3" : "num is not smaller than 3"
 // shortcut for if else statement
 
 let isEven = (num) => num % 2 == 0 ? num + " is Even" : num + " is Odd";
 isEven = (num) => {
    return num % 2 == 0 ? num + " is Even" : num + " is Odd";
 }
 console.log(isEven(8)) // True
 console.log(isEven(9)) // false
