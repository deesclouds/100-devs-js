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
What are loops

