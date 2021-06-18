const buttons = document.getElementsByClassName("btn");
const displayArea = document.getElementById("display");
const operator = document.getElementsByClassName("operator")

//this is setting up the display area for the button interaction
const displayValue = (output) => {
  displayArea.innerHTML = output;
}

//this will attach any button values being clicked and will display in the output area
const appendDisplayValue = (value) => {
  displayValue(`${displayArea.innerHTML} ${value}`);
}

//empty array to be used for storing button inputs
let inputsArr = []; 

//global function for clearing the display area
const clearDisplayValue = () => displayValue("");



//this is the function to be called once button/s are clicked
const buttonClick = (event) => {
  const buttonValue = event.target.value;
  //Clearing display area
  if (buttonValue === "C") {
    clearDisplayValue();
    inputsArr = [];
  } else {
    if (clearOnNextDigitInput) {
      clearDisplayValue();
    }
    appendDisplayValue(buttonValue);
  }
}

//this will loop to all number buttons and  add the click event
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", buttonClick);
}

const operators = ["+", "-", "/", "*"];
let clearOnNextDigitInput = false;

//this is the function to be called once operator/s are clicked
const operatorButton = (event) => {
  const currentValue = Number.parseInt(displayArea.innerHTML);
  inputsArr.push(currentValue);

  const operatorValue = event.target.value;
  inputsArr.push(operatorValue);

  if (operatorValue === "=") {
    const result = computeInputs(inputsArr);
    displayValue(result);
    inputsArr = [];
  } else {
    clearOnNextDigitInput = true;
  }
}

//math operations
const computeInputs = (inputs) => {
  let lastOperator = undefined; 
  return inputs.reduce((acc, currentValue) => {
    if (operators.includes(currentValue)) {
      lastOperator = currentValue;
    } else if (lastOperator && !isNaN(currentValue)) {
      if (lastOperator === "+") { 
        acc += currentValue;
      } if (lastOperator === "*") {
        acc *= currentValue;
      } if (lastOperator === "-") {
        acc -= currentValue;
      } if (lastOperator === "/") {
        acc /= currentValue;
      }
    }
    return acc;
  });
}

//this will loop to all operator buttons and  add the click event
for (let j = 0; j < operator.length; j++) {
  operator[j].addEventListener("click", operatorButton);
}
