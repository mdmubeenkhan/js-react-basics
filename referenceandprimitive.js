// primitive (string, numbers) types and reference (array, objects) types

let num1 = 100
let num2 = num1
console.log(num1)
console.log(num2)

//change of num2 will not impact num1
num2 = 50
console.log(num2)


let person={
    pname : "mubeen",
    age : 50
}
console.log(person.pname)

//person details is copied in person3 object as spreads copies the details
let person3 ={
    ...person
}

//Change in reference type will be reflected to all references
let person2 = person
person2.pname = "khan"
console.log(person.pname)
console.log(person2.pname)

console.log(person3)
