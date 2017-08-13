var txt
alert("This program converts from Celsius to Fahrenheit and vice versa. You will be asked to input a unit and then a temperature")

var unit = prompt("Please enter C to convert to Celsius or F for Fahrenheit","Type here")
if (unit != "C" && unit != "F") {
    txt = "You messed up the input try again"
}

var temp = 0.0
temp = prompt("Please enter a temperature","Type here")

var output = 0.0
if (isNaN(temp)) {
    txt = "You messed up the input try again"
} else {
    if (unit == "C") {
        output = (temp - 32) * 5 / 9
        txt = "Your temperature in Celsisus comes to " + output
    } else {
        output = temp * 9 / 5 + 32
        txt = "Your temperature in Fahrenheit comes to " + output
    }
}

alert(txt)



