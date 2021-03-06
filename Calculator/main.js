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

let result = 0;
let lastOperator = undefined;
let clearOnNextDigit = false;

const clearDisplayValue = () => displayValue("");

//this is the function to be called once button/s are clicked
const buttonClick = (event) => {
  const buttonValue = event.target.value;
  //Clearing display area
  if (buttonValue === "C") {
    clearDisplayValue();
    result = 0;
    clearOnNextDigit = false;
  } else {
    if (clearOnNextDigit) {
      clearDisplayValue();
    }
    appendDisplayValue(buttonValue);
  }
}

//this will loop to all number buttons and  add the click event
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", buttonClick);
}

//this is the function to be called once operator/s are clicked
const operatorButton = (event) => {
  const operatorValue = event.target.value;
  lastOperator = operatorValue;
  const currentValue = Number.parseInt(displayArea.innerHTML);
  if (result === 0) {
    result = currentValue;
  } else {
    if (operatorValue === "+") {
      result += currentValue;
      displayValue(currentValue);
    } if (operatorValue === "*") {
      result *= currentValue;
      displayValue(currentValue);
    } if (operatorValue === "-") {
      result -= currentValue;
      displayValue(currentValue);
    } if (operatorValue === "/") {
      result /= currentValue;
      displayValue(currentValue);
    } if (operatorValue === "=") {
      displayValue(result);
    }

  }
  clearOnNextDigit = true;
}

//this will loop to all operator buttons and  add the click event
for (let j = 0; j < operator.length; j++) {
  operator[j].addEventListener("click", operatorButton);
}

//Math operations


const add = (n1, n2) => {
  n1 + n2;
}

const multiply = (n1, n2) => {
  n1 * n2;
}

const subtract = (n1, n2) => {
  n1 - n2;
}

const divide = (n1, n2) => {
  n1 / n2;
}
