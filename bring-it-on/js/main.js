// *Variables*
// Create a variable and console log the value
let bringItOn = 69
// console.log('bringItOn')

// Create a variable, add 10 to it, and alert the value
let bringItOnTwo = 100 
bringItOnTwo += 10
// alert('bringItOnTwo')

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourAndAlert(n1,n2,n3,n4){
    alert(n1 - n2 - n3 - n4)
}

// Create a function that divides one number by another and returns the remainder

function divideNumAndReturn(n1,n2){
    return n1 % n2
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoNumsAndAlert(num1, num2){
    let sum = num1 + num2 
    if (sum > 50){
        alert('Jumanji')
    }
}

// Create a function that multiplies three numbers and if the product is divisible by 3 alert ZEBRA

function multThreeNumsAndAlert(n1,n2,n3){
    let product = n1 * n2 * n3
    if(product % 3 === 0){
        alert('ZEBRA')
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordAndNumLoop(word, num){
    for(let i = 1; i <= num; i++){
    console.log(word)
    }
}