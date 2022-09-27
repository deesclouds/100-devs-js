//Write your pseduo code first! 
// c to f

document.querySelector('h1').addEventListener('click', cToF)

function cToF(){
    // need value in Celsius
    let temperature = Number(document.querySelector('input').value)
    // convert Celsius to Fahrenheit 
    temperature = temperature * 1.8 + 32
    // display value 
    document.querySelector('h2').innerText = temperature
}

