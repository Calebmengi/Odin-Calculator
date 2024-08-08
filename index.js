const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".input");
const clearCalc = document.querySelector(".clear");

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["+", "-", "/", "*", "="];

let number1 = "";
let number2 = "";
let operator = "";
let result = "";

function resetCalculator() {
    number1 = "";
    number2 = "";
    operator = "";
    result = "";
    updateDisplay("0");
}

clearCalc.addEventListener("click", resetCalculator);

function updateDisplay(value){
    display.innerText = value;
}


buttons.forEach(button => {
    button.addEventListener("click" , () => {
        const value = button.value;

        if (numbers.includes(value)) {
           if (operator){
             number2 += value;
             updateDisplay(number2);
           } else {
            number1 += value;
            updateDisplay(number1);
           }
        } else if (operators.includes(value)) {
            if (value === "=") {
                if (number1 && number2 && operator){
                    switch(operator){
                        case "+":
                            result = parseFloat(number1) + parseFloat(number2);
                            break;
                         case "-":
                             result = parseFloat(number1) - parseFloat(number2);
                             break;             
                         case "*":
                             result = parseFloat(number1) * parseFloat(number2);
                             break;                      
                         case "/":
                            result = parseFloat(number1) / parseFloat(number2);
                             break;    
                    }
                    updateDisplay(result);
                    number1 = result.toString();
                    number2 = "";
                    operator = "";
                }
            } else {
                if(!number2){
                    operator = value;
                    updateDisplay(number1 + " " + operator);
                }
            }
        }
    })
}) 

