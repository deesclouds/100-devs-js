// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi".

// If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function takesInArr(newArr){
if (newArr[0] < [newArr.length - 1]){
    alert('Hi')
}else if(newArr[0] > [newArr.length - 1]){
    alert('Bye')
}else{
    alert('We close in an hour')
}
}

takesInArr([1,2,3,4,5])
takesInArr([5,4,3,2,1])