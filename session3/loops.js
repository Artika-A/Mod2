x = 0
while(x < 5){
    console.log("x is currently", x)
    x = x + 1 // increment x by 1
}

console.log ("---------------------")

let userNumber = prompt("Type a number")
counter = 0

while(counter < userNumber){
    console.log("counter is currently", counter)
    //counter = counter + 1 // increment by 1
    counter += 1 //shorthand method for incrementing by 1

}


// for loop

for(i = 0; i < 7; i++){
    console.log("i is currently", i)
}

// do  while loop
// this loop guarentees at least one iteration

let y = 0
do{
    console.log("y is currently", y)
    y++
}while(y < 4)