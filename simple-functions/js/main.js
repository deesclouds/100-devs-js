//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoAndAlert(num1,num2){
   let answer = num1 - num2
   alert(answer)
}

//create a function that divides three numbers and console logs the quotient
function divideThreeAndLog(n1, n2, n3){
    console.log(n1 / n2 / n3)
}
divideThreeAndLog(12,4,3)

//create a function that multiply three numbers and returns the product
function multiThreeAndReturn(num1, num2, num3){
    let product = num1 * num2 * num3
    return product
}
let returnedVal = multiThreeAndReturn(2, 3, 5)
console.log(returnedVal)

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function sumAndDivide(num1, num2, num3){
    return (num1 + num2) % num3
}
console.log(answer1)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function hardQuestion(num1, num2, num3, num4){
    let product = num1 * num2
    if (product > 100){
        console.log(product + num3 + num4)
    }else if (product < 100){
        console.log(product - num3 - num4)
    }else{
        alert((n1 * n2 * n3) % n4)
    }
}
hardQuestion(5,4,3,2)
hardQuestion(100,1,3,2)