

function decrease() {
    let elTitle = document.getElementById('number');
    console.log(elTitle);
    let value = elTitle.innerText;
    console.log(value);
    let number = parseInt(value);
    console.log(number);
    number -= 1;
    console.log(number);
    elTitle.innerText = number;
}

function increase() {
    let elTitle =document.getElementById('number');
    console.log(elTitle);
    let value = elTitle.innerText;
    console.log(value);
    let number = parseInt(value);
    console.log(number);
    number += 1;
    console.log(number);
    elTitle.innerText = number;
}

function save(){
    result = result + number + '|';
    number = 0;
    elNumber.innerText = number;
    elSaveNumber.innerText = 'save-number: ' + result;
}