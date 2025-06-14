// Create a file students.js:

// Define an array students containing 3 objects, each with:

// name (string)

// age (number)

// isEnrolled (boolean)


let students = [{
    name : "Ali",
    age : 20,
    isEnrolled : true
},
{ 
    name : "Abu",
    age : 20,
    isEnrolled : true
},
{
    name : "Aminah",
    age : 20,
    isEnrolled : false
}
];

// 1. Log all student names

students.forEach(function(student){
    console.log(student.name)
})

// 2. Log only those who are enrolled

students.forEach(function(student){
    if (student.isEnrolled){
    console.log(student.name)
    }
})

// 3. Add a new student using .push()

students.push({
    name :"Sarah"
})

console.log(students[students.length - 1])

// 4. Remove one student using .pop()

let removedStudent = students.pop();
console.log(removedStudent)

console.log(students[students.length - 1])