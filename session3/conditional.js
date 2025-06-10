if(true){
    console.log("Condition is true!")
}else{
    console.log("Condition is false!")
}

x = 5
if (x < 10){
    console.log("x is smaller than 10")
}else{
    console.log("x is larger than 10")
}

console.log(x ==10)

if(5 != 1){
    console.log("Statement is true")
 }else{
        console.log("Statement is false")
}
    
console.log("-----------------------------")

//Logic Gates
// AND, OR, NOT, NAND, NOR, XOR, XAND - All are logic
// AND, OR - Need this only

if(true &&  false){
    console.log("Logic AND gates true")
}else{
    console.log("Logic AND gates false")
}

if(true || false){
    console.log("Logic OR gates true")
}else{
    console.log("Logic Or gates false")
}


x = 5
y = 10
if(x < 7 && y > 8){
    console.log("x is smaller than 7 and y is larger than 8")
}else{
    console.log("x is smaller than 7 and y is not larger than 8")
}

// to declare variable use :-
// let, var (older, technically let), const

const correctUsername = "Artika"
const correctPassword = "1234"

let username = prompt("Type you username")
let password = prompt("Type you password")

if(username == correctUsername && password == correctPassword){
    console.log("Login successful")
}else{
    console.log("Login failed")
}


