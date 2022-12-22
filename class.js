// class and objects

class Vehicle{
    //define property outside constructor
    mileage = 65
    price = 1.5
    constructor(bName){
        this.brand = bName;
    }

    //arrow method
    buy = () =>{
        console.log("Ather buy method.")
    }
}
let veh = new Vehicle("Ather");
console.log(veh)
console.log(veh.buy())


class Customer{
    constructor(cName,cAge,cSalary){
        this.cName = cName;
        this.cAge = cAge;
        this.cSalary = cSalary;
    }
    buy(){
        console.log("customer buy method.");
        return "return from buy method."
    }
    customerProperty(){
        console.log("============")
        console.log(this.cName)
        console.log(this.cAge)
        console.log(this.cSalary)
        console.log("===========")
    }
}

let customer1 = new Customer("mubeen", 34, 100);
console.log(customer1.cName, customer1.cAge, customer1.cSalary)
customer1.buy()
customer1.customerProperty()

//iheritance example
class inheritanceCustomer extends Customer{
    sell(){
        console.log("inherited class sell method.")
        return "return from sell method."
    }

}

let inhc = new inheritanceCustomer("khan", 22, 200);
console.log("===== logs from inheritance customer class ====")
console.log(inhc.cName)
console.log(inhc.cAge)
console.log(inhc.cSalary)
console.log(inhc.buy())
console.log(inhc.sell())
console.log("===== end inheritance customer class ======")