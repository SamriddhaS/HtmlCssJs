
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


//############### callbacks ########################

function hello(onclickcallback){
    console.log("inside helo")
    onclickcallback();
}

hello(myCallabck);

function myCallabck(){
    console.log("this is my callback function");
}


//################### For Each / Map ###########################

// Differences between forEach() and map() methods
// The forEach() method does not returns a new array based
// on the given array. The map() method returns an entirely
// new array. The forEach() method returns “undefined“. The 
// map() method returns the newly created 
// array according to the provided callback function.


// ################## Funtion As Expression | Arrow Function #########

function normalFun(){
    console.log("function decleraction")
}

// function as expression
const myFun = function(){
    console.log("function as expression")
}


// Also Function as expression
setTimeout(function(){
    console.log("This is also - function as expression")
},3000)

normalFun();
myFun();

//// Arrow Functions ////////
const myArrowFun = () => console.log("Arrow expression")

myArrowFun()

const myArrowFun2 = (fullName,age) => {
    console.log(`hello ${fullName}, nice to meet you. You are ${age} years old`)
}

myArrowFun2("Samriddha","26");

const names = ["Sam","Ram","Jam","Pam","Bam"]

const outPut = names.map((element) => 
    {
        return element.toUpperCase()
    })

console.log(`list of names ${outPut}`)


// ################## Objects Oriented Proframming In Js #########

// This is a object in JS, 
// it can be a key value pair like we use in json.
const animal = {
    name : "cat",
    numberOfLegs : 4,
    hasHands : false,
    isMamel:true,
    makeSound : () => console.log("Mew, mew, meeewwww...")
}

console.log(animal.name)
console.log(animal.numberOfLegs)
animal.makeSound()

const human = new Object();
human.noOfLegs = 4;
human.noOfFingers = 20;

console.log(human.noOfLegs)
console.log(human.noOfFingers)

// We can use
// JsObject along with new keyword to create 
// something thats similar to classes in OOP's langs.

// Function with constructures : special method for defining the properties
// and methods of objects.
function Food(name,color,isHealthy,price){
    this.name = name;
    this.color = color;
    this.isHealthy = isHealthy;
    this.price = price;
}

// Now we can create multiple veriables that has 
// similar properties of Food. "new" keyword helps 
// to create the variable and provide value.
const rice = new Food("Rice","white",true,"$10.00")
const daal = new Food("Daal","Yellow","false","$13.89")

console.log(rice)
console.log(daal)

////###### Classes in JS ############
// class = (ES6 feature) provides a more structured and cleaner way to
// work with objects compared to traditional constructor function
// ex. static keyword, encapsulation, inheritance

class Dish{
    constructor(name,price){
        this.name = name;
        this.price = price
    }

    printFoodDetails(){
        console.log(`Dish Name: ${this.name} price: ${this.price}`)
    }

    printPriceWithGST(){
        console.log(`Dish Name: ${this.name} price+GST: ${this.price+(this.price*(18/100))}`)
    }

    // Static variables can be accessed without 
    // creating an object of a class. 
    static staticVariable = "This is a static variable"
}

const chicken = new Dish("Chicken Tikka","99.89")
const mutton = new Dish("Mutton Nihari","199.89")

console.log(chicken)
chicken.printFoodDetails();
chicken.printPriceWithGST();
mutton.printFoodDetails();
mutton.printPriceWithGST();

// calling static variable without creating an object first.
console.log(Dish.staticVariable)

///// Inheritance //////////////////
class Currey extends Dish {

    constructor(name, price, spiceLevel) {
        // Call the parent class constructor with name and price
        // using super keyword
        super(name, price);
        this.spiceLevel = spiceLevel;
    }
    makeCurrey(params) {
        console.log("making some currey")
    }
}

const chickenCurrey = new Currey("PaneerCurrey",33.09,"high");
console.log(chickenCurrey.printFoodDetails())



//// Getters and setters in js /////////////////

class Person {
    constructor(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
  
    // Getter for fullName
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    // Setter for fullName
    set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this._firstName = firstName;
      this._lastName = lastName;
    }
  
    // Getter for firstName
    get firstName() {
      return this._firstName;
    }
  
    // Setter for firstName
    set firstName(name) {
      this._firstName = name;
    }
  
    // Getter for lastName
    get lastName() {
      return this._lastName;
    }
  
    // Setter for lastName
    set lastName(name) {
      this._lastName = name;
    }
  }
  
  // Usage
  const person = new Person('John', 'Doe');
  
  // Using getters
  console.log(person.fullName); // John Doe
  
  // Using setters
  person.fullName = 'Jane Smith';
  console.log(person.fullName); // Jane Smith
  
  // Accessing individual properties with getters
  console.log(person.firstName); // Jane
  console.log(person.lastName);  // Smith
  
  // Modifying individual properties with setters
  person.firstName = 'Alice';
  console.log(person.fullName); // Alice Smith
  
