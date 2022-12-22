//map
let array1 = [2, 4, 10]

//passed anonymous function in map which doubles the value
let array2 = array1.map(function(num){
    return 2*num;
})

console.log(array2)

//this will produce the same result as above
//here we have used arrow function
let array3 = array1.map(x => 2*x)
console.log(array3)

//****Filter function */
//apply the filter value
let array4 = [2, 3, 4, 9, 10]
let array5 = array4.filter(x => x%2==0)
console.log(array5)

let array6 = array4.filter(function (x){
    if (x%2==0){
        return x
    }
})
console.log(array6)