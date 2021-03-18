const display = document.getElementById("calcDisplay");
const button = document.querySelectorAll("button");

let calculation = "";
let lastOperator = "";
let lastDot = "";

const pressedANumber = (num) => {
    console.log(num);
    lastOperator = "";
    if (display.textContent === "0") {
        calculation = "";
        display.textContent = calculation;
    } else {
    }
    display.textContent = display.textContent + num;
}

const pressedAOperator = (operator) => {
    
    if (display.textContent === "0") {
        if(operator === "*" || operator === "/") {
            calculation = "0";
        } else {
            calculation = operator;
        }
        display.textContent = calculation;
    }

    console.log(lastOperator + ":" + operator);
   if (lastOperator === operator) {
       lastOperator = "";
       display.textContent[display.textContent.length - 1] = operator;
   } else if (isNaN(display.textContent[display.textContent.length - 1]) == true) { // Means the last character is an operator except the previous one
        let position = display.textContent.lastIndexOf(lastOperator);
            display.textContent[position] = operator;
            // display.textContent = display.textContent;
            console.log(true);
    } else {
        lastOperator = operator;
        display.textContent = display.textContent + lastOperator;
    } 
    
    if (operator === "=") {
        pressedEqual(operator);
    }
}

const pressedDot = (dot) => {
    if (lastDot === ".") {
        dot = "";
        display.textContent[display.textContent.length - 1] = lastDot;
    }
    display.textContent = display.textContent + dot;
    lastDot = ".";
}

const pressedC = () => {
    display.textContent = "0";
    calculation = "";
    lastOperator = "";
}

const pressedEqual = () => {
    display.textContent = eval(display.textContent);
}

