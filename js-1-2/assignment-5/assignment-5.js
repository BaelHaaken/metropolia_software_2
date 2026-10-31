const year = Number(prompt("Enter a year:"));

let result;

if (!Number.isInteger(year) || year <= 0) {
    result = "Please enter a valid year.";
} else if (year % 400 === 0) {
    result = year + " is a leap year.";
} else if (year % 100 === 0) {
    result = year + " is not a leap year.";
} else if (year % 4 === 0) {
    result = year + " is a leap year.";
} else {
    result = year + " is not a leap year.";
}

document.getElementById("result").innerHTML =
    `<h2>${result}</h2>`;
