
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
