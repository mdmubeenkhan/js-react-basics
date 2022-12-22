// Array destructuring

let vehList = ["maruti", "honda", "tata"]
console.log(vehList[1])

//Assign all the list element to variables 
let [car1, car2, car3] = vehList
console.log(car2)

//i want to add only tata
let [, , mycar] = vehList;
console.log(mycar);


//Object destructuring
const Person = {
    pName : "mubeen",
    age : 44
};
console.log(Person.pName, Person.age);

const {pName:myname, age} = Person;
console.log(myname, age)

