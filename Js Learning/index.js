
// Finding html element and accessing them from Js files. 
document.getElementById("pageTitle").textContent = 'Welcome To Js Course'
document.getElementById("pageDescription").textContent = 'We are going to learn a lot'

//########## Veriables ###################################

let x; //Declare the variable
x = 2000; // assign the variable

document.getElementById("pageDescription").textContent = `Value of x : ${x}`

let name = "samriddha" // its a string
let age = 26 // its a integer
let isMarried = true // its a boolean
let salary = 100.12 // its a float / double

console.log(`Name is ${name}. Data type is : ${typeof name}`)
console.log(`${name}'s age is ${age}. Data type is : ${typeof age}`)
console.log(`${name}'s is Married : ${isMarried}. Data type is : ${typeof isMarried}`)
console.log(`${name}'s salary is ${salary}. Data type is : ${typeof salary}`)

document.getElementById("name").textContent = `Name is ${name}. Data type is : ${typeof name}`
document.getElementById("age").textContent = `${name}'s age is ${age}. Data type is : ${typeof age}`
document.getElementById("isMarried").textContent = `${name}'s is Married : ${isMarried}. Data type is : ${typeof isMarried}`
document.getElementById("salary").textContent = `${name}'s salary is ${salary}. Data type is : ${typeof salary}`

//##################  Operators ###########################################
let firstNum = 89
let secondNumber = 8

document.getElementById("operators").textContent 
= `First number + Second is ${firstNum+secondNumber} 
   First number - Second is ${firstNum-secondNumber}
   First number * Second is ${firstNum*secondNumber}
   First number (exponent **) Second is ${firstNum**secondNumber}
   First number / Second is ${firstNum/secondNumber}
   First number % Second is ${firstNum%secondNumber}
   First number++ = ${++firstNum}
   First number-- = ${--firstNum}
`
/* 
Operator precedence will be like this : 
1. Parenthesis ()
2. Exponents (**)
3. multiplication(*) , division(/) & modulo (%)
4. Addition and subtraction (+,-)
*/


//############# Accept user input ######################

// Easy Way 
document.getElementById("acceptButton").onclick = function(){
    acceptUsserInput()
}

function acceptUsserInput(){
    let name  = window.prompt(`what is you name ?`)
    document.getElementById("userInput").textContent = `Hello ${name}, Welcome to JS!`

}

// using input field
let userName = ""
let userPassword = ""
document.getElementById("submitBtn").onclick = function(){
    userName = document.getElementById("userName").value;
    userPassword = document.getElementById("password").value;
    if(userName===""||userPassword===""){
        document.getElementById("outPut").textContent = `user name or password is empty`
        return;
    }
    document.getElementById("outPut").textContent = `Hello ${userName}, Welcome to JS!. Your password is = ${userPassword}`
}



//########### Variable Scopes ####################
// Local variable scope vs Global variable scope

// global variable
const myVar = "Its a global scoped function"

function one(){
    let localVar = 1123 // its a local scope function.
    console.log(localVar)
    return ""
}

one()

//############ Spread Operators #####################
// Spread operator = ...
// Allows an iterable such as an arrey or string to be
// expanded into seperate elememts.

let numbers = [10,12,30,14,56,33,123,89]

// this will unpack the array elements one by one
console.log(Math.max(...numbers)) 

let myName = "SamriddhaSamanta"
// breaks the entire string into individual chracters.
let letters = [...myName]
console.log("Length of the letter:"+letters.length)
console.log("Letters : "+letters)
console.log("Letters : "+letters.join('-'))

/// Combining multiple arryes into one using spread operator

let foods = ["Roti","Sabji","Dal","Chawal","Biriani"]
let vegtables = ["Muli","Kaddu","Alu","Tomato","Vindi"]

let mainCourse = [...foods,...vegtables,"AddSomeSalt","Someoil"]

console.log(...mainCourse)


//############ Rest Parameters #####################
// function abc(..restParameter)
// combines multiple function arguments into one arrey.
// 
function listOfProgrammingLang(...lang){
    console.log(lang.join(" | "))
}

listOfProgrammingLang("c",1221,"c++","python",11311)
