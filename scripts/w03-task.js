/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers () { 
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2;
}

function subtractNumbers () { 
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
 multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
};
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
}
const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    // prevent zero division 
    if (divisor !== 0) {
        document.querySelector('#quotient').value = divide(dividend, divisor);
    } else {
        alert('Cannot divide by zero. Please enter a non-zero divisor.');
    }
};
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', calculateTotal);

function calculateTotal() {
    // Declaring and instantiating a variable that stores the numeric value entered by the user in the subtotal field.
    let subtotal = parseFloat(document.querySelector('#subtotal').value);

    // Check IF the membership checkbox has been checked by the user 
    let isMember = document.querySelector('#member').checked;

    // apply a 20% discount to the subtotal amount.
    if (isMember) {
        subtotal *= 0.8;
    }

    // Output the total to the the total span in the format shown with two decimals using a template string.
    let total = document.querySelector('#total');
    total.textContent = `$${subtotal.toFixed(2)}`;
}


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').innerHTML = numbersArray.join(', ');

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.querySelector('#odds').innerHTML = oddNumbers.join(', ');

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').innerHTML = evenNumbers.join(', ');

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((sum, number) => sum + number);
document.querySelector('#sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */
let multiArray = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').textContent = multiArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
const sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;
