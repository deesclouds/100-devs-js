//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array Bonus:(do not use map or filter)

function onlyEvensFinder(arr){
    let onlyEvens = []
    arr.forEach(num => {
        if(num % 2 === 0){
            onlyEvens.push(num)
        }
    })
    return onlyEvens
}
onlyEvensFinder([1,2,3,4,5,6])
    
// Using filter
// function onlyEvensFinder(arr){
//    return arr.filter( num => num % 2 === 0 )
//    }
// console.log(onlyEvensFinder([1,2,3,4,5,6]))
    