// Explain program to user
var txt
alert("This program converts from Celsius to Fahrenheit and vice versa. You will be asked to input a unit and then a temperature. Click OK to begin")

// Get input from user for unit, check for bad input
do {
var unit = prompt("Please enter C to convert to Celsius or F for Fahrenheit","Type here")
if (unit != "C" && unit != "F") {
    alert("Invalid input! Click OK to try again")
}
} while (unit != "C" && unit != "F")

// Get input from user for temperature, check for bad input
var temp = 0.0
do {
    temp = prompt("Please enter a temperature","Type here")
    if (isNaN(temp)) {
        alert("You must input a number. Click OK to try again")
    }
} while (isNaN(temp))

// Output to user
var output = 0.0

if (unit == "C") {
    output = (temp - 32) * 5 / 9
    txt = "Your temperature in Celsisus comes to " + output
} else {
    output = temp * 9 / 5 + 32
    txt = "Your temperature in Fahrenheit comes to " + output
}

alert(txt)



