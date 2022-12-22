// use let and const
//dont use var
let myname = "mubeen1";
console.log(myname);

//arrow function
function myfunc(){
    console.log("from arrow function.")
}
myfunc();

let myFuncName = (name)=>{
    console.log(name);
    return name
};
console.log(myFuncName("md"));

let func2 = name => name;
console.log(func2("khan"))

let func3 = (name) => name;
console.log(func3("khan"))

let double = num => 2*num;
console.log("Double number for 10 = ", double(10))

let multiply = (num1, num2) => num1*num2
console.log(multiply(10, 20))



// Use live server extension from vs code to launch the index.html
// Important to know the bundeling
// import and export
import {tech} from './lib.js';
import {person, data} from './lib.js';
import {data as d} from './lib.js';
import {tech2} from './lib2.js';
console.log(tech("mypython"))
console.log(person)
console.log(data)
console.log(d)

//bundling the export
import * as mybundle from './lib.js'
console.log(mybundle.person)
console.log(mybundle.data)
console.log(mybundle.tech("mytech"))

//default exported value from lib.js
import md from "./lib.js" 
// md is not defined in lib.js it currently pointing to export default mydata
console.log(md)

