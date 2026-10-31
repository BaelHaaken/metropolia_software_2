const number1 = Number(prompt("Enter the first integer:"));
const number2 = Number(prompt("Enter the second integer:"));
const number3 = Number(prompt("Enter the third integer:"));

const sum = number1 + number2 + number3;
const product = number1 * number2 * number3;
const average = sum / 3;

document.getElementById("result").innerHTML =
    `<p>Sum: ${sum}</p>
     <p>Product: ${product}</p>
     <p>Average: ${average}</p>`;
