// function that converts Celsius to Fahrenheit
function celsiusToFahrenheit (celsTemp) {
    var fTemp = celsTemp * (9 / 5) + 32;
    return console.log(fTemp);
}

// function that converts Fahrenheit to Celsius
function fahrenheitToCelsius (fahrenTemp) {
    var cTemp = (fahrenTemp - 32) / (9 / 5);
    return console.log(cTemp);
}

// Function calls
celsiusToFahrenheit (32);
fahrenheitToCelsius (89.6);