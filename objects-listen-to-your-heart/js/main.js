//Create a stopwatch object that has four properties and three methods

// Using literal notation

// creating the object
let stopwatch = {}

// creating its properties
stopwatch.currentTime = 12
stopwatch.color = 'black'
stopwatch.model = 'pro survivor'
stopwatch.shape = 'round'

// creating its methods
stopwatch.tellTime = function(time){
    console.log(`The current time is ${time}.`)
}
stopwatch.start = function(){
    console.log(`Start workout!`)
}
stopwatch.stop = function(){
    console.log(`Stop workout!`)
}