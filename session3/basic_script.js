console.log(5)

let x =5
console.log(x)

x= 7
console.log(x)

const y = 8
console.log(y)

console.log((7 + 3) * 10)

let seven = 7
let three = 3
console.log((seven + three)* 10)
// but if we put "", the result will be NaN (NotaNumber) --e.g console.log(("seven" + "three")* 10)

let banana = "hello"
let mango = " Mango"
console.log(banana + mango)

let one ="1"
let two = "2"
console.log(one + two)

//Data TYPES
//PRIMITIVE Data-Types
// number,string, decimal (long, double), boolean
//Boolean (true, false)

let nm = 3.142
console.log(typeof nm)
let myBool = true
console.log(typeof myBool)

console.log("------------------------")

//Non-Primitive Data-Types
//array, object, function
// [] square bracket
//() round bracket
// <> angle bracket
//{} curly bracket (Braces)

let anArray = [10, 9, 8, 7, 6, "Hello", true, 3.1412, true, false, true, true]
console.log("Length of anArray", anArray.length)
console.log("Last item of anArray", anArray[anArray.length - 1])
// position always 1 less than length