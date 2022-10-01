# Glossary

All of the terms needed to be added into Anki for practice. 

# Programming
A computer will do what you tell it to do.
The task of writing those instructions in a language that the computer can understand.

# Program
A set of instructions that we write to tell a computer what to do.

# 01
Represents on and off 
00 means off
11 means on

# Javascript
Language that can run on the front and backend that computer can use to understand and is human readable

# Syntax
Spelling and grammar in a programming language

# Variables
data stored in memory

# Variable Conventions
camelCase:
let numberOfApples = 9

# Variables & DataTypes
what can be stored?
- Strings ('' , "", ``)
  - double vs single
  - whatever is done on the outside cannot be done on the inside
- numbers 
  - int: 29
  - float: 5.14876
  - signed +4 -4
  - arithmetic (+ addition, - subtraction, * multiplication, / = division, % modulus = remainder)

# Making decisions 
true or false

# Comparison
are two things equal?
9 === 9 

# Logical Operators
= : assignment 
== : value
===: value and type
!= : not equal
!==: not equal to value or type
>: greater than
<: less than
>=: greater than or equal to
<= : less than or equal to

danger with = or == 
typos for assignment operator vs comparison operator

# Conditional Syntax
if (condition is true){
    //Do  this
}else if(condition is true){
    //Do this
}else{
    //default cool stuff
}

can have as many else ifs we like

const pizza = "Dominos"

if(pizza === "Papa Johns") {
    console.log("Scram!")
}else if(pizza === "Dominos"){
    console.log("All aboard the train to flavor town")
}else{
    console.log("What are you even doing with your life")
}

# Multiple Conditions
if (name === "Leon" && status === "Ballin"){
    //Wink at camera
}

if (day === "Saturday" || day === "Sunday"){
    //It is the weekend
}

- Ternary Conditionals
2 > 1 ? 'Math is real' : 'I\'ve been spending too much time on youtube'
'Math is real'

# Functions
Sets of instructions
Resusable
Perform one action
Basic building blocks of our programs

example of a function:

function name(parameters){
    //body
}
//call
name(arguments)

ex: function yell(word){
    alert(word)
}

yell("Hello")

we can tell we are calling the function by the parenthesis

- can use functions that uses more than one parameter
function yell(word, otherWord){
    alert(word)
    alert(otherWord)
}
alert("Hello","Goodbye")

# Loops
What are loops?
repeats an action number of times
for, while and do while loops
each offers a different way to determine the start and end points of a loop


for (let i = 1; i < 5; i++){
    console.log(i)
}
- let i = 1 means the counter starts at one
- then i++ adds 1 to i
- when i is not < 5 the loop stops

1, 2, 3, 4 is printed to the counter

# Loops - While

let count = 0

while(count < 5){
    console.log(count)
    count++
}

- we can run into an infinite loop
- the Chrome browser doesn't do this
  
# Arrays
What are arrays?
- toasters
- one element that holds four different things that holds whatever you want within them 
- data structure to store ordered collections
- elements are numbered starting at 0
- many methods to manage the order of elements
- created by a constructor or literal notation

# Declaring Arrays
let newArr = new Array() //array constructor

let newArr = [] //literal notation

can be declared with elements inside of array 

Elements & Array indexing
Elements: "NYC"  "LA"  "SYD" "LDN"
Index:      0     1      2     3

undefined would return if there isn't an element that exists at that index

# Array Indexing
newArr = ['Zebra', , true, 21]

console.log(newArr[0]) //Zebra
console.log(newArr[1]) //undefined
console.log(newArr[2]) //true
console.log(newArr[3]) //21

Elements can be accessed by their index numbers

newArr = ['Zebra', , true, 21]
newArr[1] = 'Bob'
console.log(newArr)

//['Zebra', 'Bob', true, 21]
Elements can be updated by using the index at that position

let cars = ['Honda', 'Toyota', 'Ford', 'Tesla']
let nums = [1,2,3]
cars = nums
console.log(cars) //[1,2,3]

we can overwrite whole arrays by assigning an array to a different array

# Array Length
How to determine how many elements are in our array?

console.log(newArr.length) //4

# Array Iteration
Iterates through an array passing in the value and index of each element

let bestColors = ['green', 'blue', 'yellow', 'black']

for(let i = 0; i < bestColors.length; i++){
    console.log(bestColors[i])
}



Iterates through an array passing in the value and index of each element.

Using methods built into an array

let bestColors = ['green', 'blue', 'yellow', 'black']

bestColors.forEach((x,i) => console.log(x))

// x = string i = index

# Other Array Methods
shift - removes from the front

let bestRappers2020 = ['6ix9ine', 'Polo G' '6ix9ine']
let removed = bestRappers2020.shift()
console.log(bestRappers2020)
//['Polo G', '6ix9ine']

pop - removes from the end
let bestRappers2020 = ['Polo G' '6ix9ine']
let removed = bestRappers2020.pop()
console.log(bestRappers2020)
// ['Polo G']

unshift - add item to the beginning of the array
let bestRappers2020 = ['Polo G' ]
let removed = bestRappers2020.unshift('Dylan')
console.log(bestRappers2020) //['Dylan','Polo G']

push - add item to the end of the array
let bestRappers2020 = ['Dylan', 'Polo G']
let removed = bestRappers2020.push('Dylan)
console.log(bestRappers2020) //['Dylan', 'Polo G', 'Dylan]

map - loop that creates a new Array
returns 3 times since there are 3 elements within the array

let bestRappers2020 = ['Dylan', 'Polo G' 'Dylan']
let bestRappersAllTime = bestRappers2020.map(x => 'Dylan')
bestRappersAllTime.unshift('Dylan')
bestRappersAllTime.push('Dylan')
console.log(bestRappersAllTime)
//['Dylan', 'Dylan', 'Dylan', 'Dylan', 'Dylan']

# Objects
What are objects?

- a collection of variables and functions
- objects represent the attributes and behavior of something used in a program
- object variables are called properties and object functions are called methods
- objects store 'keyed' collections

- Think of a physical object 
- What are their attributes or properties of a stopwatch?
  - size : 
  - brand property: accusplit
  - color property: black
  - model property: pro survivor
  - texture :
  - shape property: round
- behaviors or methods?
  - start 
  - stop
  - mode
  - beep
  - reset

# Creating Objects using literal notation
let stopwatch = {} //constructor using literal notation

stopwatch.currentTime = 12 
//giving it a currentTime property using dot notation

stopwatch.tellTime = function(time){
    console.log(`The current time is ${time}.`)
}
//this is a method using dot notation 
//when its tied to a function thats how we know it's a method

stopwatch.tellTime(stopwatch.currentTime)
//here we are calling it with the property and method we set on the object

# What if we wanted to make lots of objects?
- if we wanted to make a new object we can copy & paste but it would make our code not DRY (Don't Repeat Yourself)
- we can use constructors to spit out our objects then get classes 
- basically build a factory

# Constructor Function
- to spit out objects it's job is to help us to create objects
- functions start with a capital letter 
- it's just a convention to let us know it is a constructor


function MakeCar(carMake, carModel, carColor, numOfDoors){
    //properties
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.doors = numOfDoors

    //methods
    this.honk = function(){
        alert(`BEEP BEEP FUCKER`)
    }
    this.lock = function(){
    alert(`Locked ${this.doors} doors!`)
 }
}
let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)

let teslaRoadster = new MakeCar('Tesla', 'Roadster', 'Red', 2)

# We forgot to enable bluetooth within our cars?
- we can add a property to a single objects by:
  - teslaRoadster.bluetooth = true

a prototype is another object that is used as a fallback source of properties

- objects check themselves first  
- they go to the parent which is the constructor ie. MakeCar()
- then goes to the global object prototype which is grandma
- we can perform an over the air updates
  - we can update all of our objects at one time by extending the constructor's prototype and adding the property we want to add 
    - MakeCar.prototype.bluetooth = true  
- this is how we handle inheritance in JavaScript

- if we wanted to add properties globally we add them to our global contructor

# APIs
- what are apis?
- a simple interface for a complex action
- think of a restaurant menu! Remember those...
- lets one thing communicate with another thing without having to know how things are implemented.

making a request to a url
that request goes to a sever
server does what it does then
responds with json/objects back

fetch("https://dog.ceo/api/breeds/image/random") //make a request via URL
    .then(res => res.json()) //parse response as JSON
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

    //api returns a JSON object that we can use within our apps

# Stop trying to make FETCH happen!
& if we want to add multiple query parameters
read the documentation to learn what query parameters the api accepts

const url= 'https://www.thecocktailsdb.com/api/json/v1/1/search.php?s=margarita"

fetch(url)
    .then(res => res.json()) //parse response as JSON
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

    //some APIs need Query Parameters to return the correct data

# Why do we use objects?
- teamwork with others
- organization with your code
- reusability of our code
- less repetition

What if there was a system, a paradigm, a set of rules, an agreed upon way to structure out code that:
made it easier to add new stuff, easier to read through what was already coded, and made it so we weren't afraid to make changes.

# OOP - Object Oriented Programming 

This fusion of data and functionality into one object

Encapsulation - the process of storing functions (methods) with their associated data (properties) in one thing (object).
- why: easier to add new stuff
- easier to read through what was already coded
- make it so we're not afraid to make changes

Abstraction:
Helps to keep our code more organized. 
Complex or unnecessary details are hidden
This enables us to implement things without understanding or even thinking about all the hidden complexity.
- why: smaller more manageable pieces of code
- Do stuff once

Inheritance:
Create new objects based on old ones
- why: We just eliminated a bunch of redundant code
  
Polymorphism:
A piece of code that automagically works with a bunch of objects we created
allows us to override a method in every child class so it will do what we want
- why: avoid if/else and switch cases
- more reusable code

These Four Pillars: 