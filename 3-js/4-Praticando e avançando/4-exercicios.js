//1
let weight = 80

//2
console.log(typeof weight)

//3

let name = "Levy"
let age = 24
let stars = 4.2
let isSubscribe = true

//4 Object
//4.1 
let student = {
    name: "Levy",
    age: 24,
    weight: 80,
    isSubscribe: true
}
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

//5
//let students = []

//6
let students = [
    student
]
console.log(students)

//7
console.log(students[0])

//8
let student1 = {
    name: "Isaac",
    age: 19,
    weight: 110,
    isSubscribe: true
}
students = [
    student,
    student1
]
console.log(students)

//9 Undefined, devido ao hoisting
/*
console.log(a)
var a = 1
*/
/*
var a;
console.log(a)
a = 1;
*/