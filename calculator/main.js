const display = document.getElementById("calcDisplay");
const button = document.querySelectorAll("button");

let calculation = "";
let lastOperator = "";
let lastDot = "";

const pressedANumber = (num) => {
    lastOperator = ""; // reset the last operator
    if (display.textContent === "0") { // When you press a number for the first time
        calculation = "";
        display.textContent = calculation; // The default 0 will disapper
    } 
    display.textContent = display.textContent + num; // A number will be added
}

const pressedAOperator = (operator) => {
    
    if (display.textContent === "0") {  // When you press an operator for the first time
        if(operator === "*" || operator === "/") { // But if it's an either * or /
            calculation = "0";  // Keeps 0
        } else {
            calculation = operator;  // If its either + or -, 
        }
        display.textContent = calculation;  // It just shows one of the operators passed
    }
    console.log(lastOperator + ":" + operator);
   if (lastOperator === operator) {  // When an operator was pressed more than twice in a row
       lastOperator = ""; // last operator = "", to try not to the same operators in a row
   } else if (isNaN(display.textContent[display.textContent.length - 1]) == true) { // Means the last character is an operator except the previous one
            if (lastOperator === "") {  // When you press + or - for the first time, "operator" should be assigned to avoid two operators shown in a row
                calculation = operator;
                lastOperator = operator;
            } else {
            display.textContent = display.textContent.replace(lastOperator, operator); // Replace an oprerator so you can change it
            lastOperator = operator;
            console.log(true);
            }
    } else {
        lastOperator = operator;  // When an operator is pressed for the first time after some number(s),
        display.textContent = display.textContent + lastOperator; // The numbers and the operator(s) will be shown
    } 
    
    if (operator === "=") {  // pressedEqual is executed when = is pressed
        pressedEqual(operator);
    }
    lastDot = "";
}

const pressedDot = (dot) => {

    if (lastDot === ".") { // If there is already a dot there
        display.textContent[display.textContent.length - 1] = lastDot; // replase the dot
        lastDot = ""; // Erase the dot
        
    } else {
        display.textContent = display.textContent + dot; // Adds a dot to the string
    }
    lastDot = "."; // Assign the dot for the next time
}

const pressedC = () => {     // Reset everything
    display.textContent = "0";
    calculation = "";
    lastOperator = "";
    lastDot = "";
}

const pressedEqual = () => {   // function to calculate
    display.textContent = eval(display.textContent);
}

