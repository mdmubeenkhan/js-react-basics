// spread and rest operator (...)
//spread operator is used for splitting the array
//

let arr1 = ["bmw", "maruti", "tata"]

//spread at left and right of honda
let updateArr = [...arr1, "honda"]
let updateArrR = ["honda", "bonda", ...arr1]
console.log(updateArr)
console.log(updateArrR)

let Person = {
    pName: "mubeen",
    pAge: 45,
}

let newPerson ={
    ... Person,
    address: "hyderabad"
}
console.log(newPerson)


// rest example ..., it is called rest operator when it is called in function as argument
function test(a, b, c){
    console.log(a,b,c)
}
test(10, 20, 30)

function test2(...all){
    console.log(all)
}
//all arguments will go into the function as an array argument
test2(10,20,30,40,"mbn")
test2() //function in this case will get empty array