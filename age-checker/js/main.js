//Create a conditional that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If over 30, tell them there is nothing left to look forward to

function checkAge(){
    if (age < 16){
        console.log('They can not drive!');
    }else if (age < 18){
        console.log('They can hate outside the club, but can\'t get in!');
    }else if (age < 21){
        console.log('They can not drink!');
    }else if (age < 25){
        console.log('They can not rent cars affordably!');
    }else if (age < 30){
        console.log('They can not rent fancy cars affordably!');
    }else {
        console.log('There is nothing left to look forward to!')
    }
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector('h1').addEventListener('click', checkAge);
const p = document.querySelector('p')
function checkAge(){
    let age = Number(document.querySelector('input').value)
        if (age < 16){
            p.innerText = 'They can not drive!';
        }else if (age < 18){
            p.innerText = 'They can hate outside the club, but can\'t get in!';
        }else if (age < 21){
            p.innerText = 'They can not drink!';
        }else if (age < 25){
            p.innerText = 'They can not rent cars affordably!';
        }else if (age < 30){
            p.innerText = 'They can not rent fancy cars affordably!';
        }else {
            p.innerText = 'There is nothing left to look forward to!';
        }
    }