
let timeArray =  new Date().toLocaleTimeString().split(":")
let timeDisplay = document.querySelector("#time");
timeDisplay.textContent = `${timeArray[0]}:${timeArray[1]}`;


const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const clearButton = document.querySelector("#all-clear");
const deleteButton = document.querySelector("#delete");
const plusMinusButton = document.querySelector("#plus-minus");
const currentDisplayText = document.querySelector("#current-display");
const previousDisplayText = document.querySelector("#former-display");
const equalsButton = document.querySelector("#equals");

let operator = undefined;




numberButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        displayNumber(button.innerText);
    })
});

operatorButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        if (currentDisplayText.innerText == '') return;
        operator = button.innerText;
        displayNumber(operator);
        changeDisplay();
        doMath(button.innerText);
    })
});

equalsButton.addEventListener('click', () =>{
    console.log(`operator: ${operator}`);
    if (operator !== undefined && currentDisplayText.innerText !== ''){
        previousDisplayText.innerText += currentDisplayText.innerText;
        currentDisplayText.innerText = doMath(operator);
        operator = undefined;
    } 
    else return;
});

clearButton.addEventListener('click', () =>{clear();})
deleteButton.addEventListener('click', () =>{deleteNumber();})
plusMinusButton.addEventListener('click',() =>{
    if (currentDisplayText.innerText.includes("-") ?
        currentDisplayText.innerText = currentDisplayText.innerText.slice(1) :
        currentDisplayText.innerText = '-' + currentDisplayText.innerText);
});

const displayNumber = (number) => {
    if (number === "." && currentDisplayText.innerText.includes(".")) return;
    //currentDisplayText.innerText = Number(currentDisplayText.innerText.replace(",","") + number).toLocaleString("en");
    currentDisplayText.innerText = (currentDisplayText.innerText+ number).toLocaleString();
             
};
// convert number to string
// split into integer & decimal digitsa
// number = currentDi



const doMath = (operator) =>{
    let result;
    const current = parseFloat(currentDisplayText.innerText); // needs to be defined
    const prev = parseFloat(previousDisplayText.innerText);
    console.log(`${prev}   ${current}`);
    switch (operator){
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "÷":
            if (current === 0){
                result = "NO Cheating the universe"
            } else{
                result = prev / current;
            }
            break;
        case "x":
            result = prev * current;
            break;
        default: 
            return;
        }
    return result;
}

const changeDisplay = () =>{
    previousDisplayText.innerText = currentDisplayText.innerText; 
    currentDisplayText.innerText ="";

}

const clear = () => {
    currentDisplayText.innerText = ''
    previousDisplayText.innerText = '';
}

const deleteNumber = () => {currentDisplayText.innerText = currentDisplayText.innerText.slice(0,-1);}


clear();


/**
 * write something to give all number buttons a click fucntion x
 * write updateDisplay 
 * write way to put number onto screen. x
 * write a way to append a number x
 * write delete
 * 
 * when i press an operator what should happen?
 * *** Operator type (+ / - / etc) should be defined.
 * *** the current text should move to the previous text and be cleared
 *
 * 
 **/