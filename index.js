// Runtime Environments 
// Browser and Nodejs

console.log("hello world")


//Algorithms
// get a job
// 1. create your resume
// 2. search job on internet
// 3. start applying(send emails and covering)
// 4. interview 
// 5. sign contract


// Algorithm is just a recipe for a cake/dish


// 1. task is to print hello world on screen
// 1. step console.log("hello world")
// 2. step save our JS file
// 3. run our file using node (node filename)

// delete all duplicate values from this array
/* const numbers = [1,3,5,2,3,5,6,7,1,4,2,3]  */

/* let set = new Set(numbers)
console.log([...set]) */

/* console.log([...new Set(numbers)]) */



// 1. check each item one by one (forEach method)
// 2. create empty array and push your item into in.
// before push we have to check if that item already exist there or not. 
/* let uniqueValues= []

numbers.forEach(item=>{
    if(!uniqueValues.includes(item)){
        uniqueValues.push(item)
    }
})

console.log(uniqueValues) */



//REST and SPREAD Operator ...
// if you use ... with value it is called spread 
// if you use ... with variable name then is rest

/* 
let numbers  = [1,2,3]

console.log(...numbers) */ // spread operator

/* function sum(...nums){
    //rest operator
   let sum = 0;
   nums.forEach(num=>{
       sum+=num
   })
   console.log(sum)
        }


 sum(1,2,5,6,3,32,4,4,5,6) // 3

 let studentData = [ "John", 24, "Berlin", "FBW32"]


 console.log(`Hi, My name is ${studentData[0]} , I am ${studentData[1]} years old, I live in ${studentData[2]}, studying in class ${studentData[3]}`) */

 //Destrcuturing Array and Object
  /*   let [ name, age, city, className] = [ "John", 24, "Berlin", "FBW32"]

    console.log(`Hi, My name is ${name} , I am ${age} years old, I live in ${city}, studying in class ${className}`) */


    // Rest
/*     let [name, prof, ...nums ] = ["Naqvi", "Teacher", 1,2,3,4]  */




// Advanced array methods
// .map .filter .reduce 

// map Method returns a new array with same numbers of item 
let random = [1,2,3,4,5,6,7,8]  //=> [1,4,9,16,25,36,49,64]

let sqauresArray = random.map(item=>item*item)
/* console.log(sqauresArray) */

// filter Method returns a new array with any numbers of items depending on condition
let citiesArray = ["Berlin","Frankfurt","Hamburg","Bonn","Dessuldorf" ]
let newCities = citiesArray.filter(item=> item.charAt(0)==="B")
/* let newCities = citiesArray.filter(item=> item.slice(0,1)==="B")
let newCities = citiesArray.filter(item=> item[0]==="B") */
/* console.log(newCities) */


// reduce method returns any type of data ( string , number, array , object, boolean)

const scores = [ 23,56,21,34,31,50,22,55]  // number type 

let total = scores.reduce((acc,item)=>{
    return acc+=item
} , 0 )
console.log(total)


// count each number occurence inside an array 
 const array = [1,2,3,4,1,2,3,2,3,2,4,5,7,6,7,2,3,1,4,6,7,4,3] //=> {"1": 3, "2": 4 , "3": 2, ....}

const result = array.reduce((acc,item)=>{
    if(acc[item]){  // acc["1"]
        acc[item]++;
    }else{
        acc[item]=1
    }
    return acc
}, {}) // {"1":2,"2":1,"3":1,"4":1}

console.log(result)

