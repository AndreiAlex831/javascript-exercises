const convertToCelsius = function(fahrenheit, celsius, roundedCelsius) {
  celsius= (fahrenheit - 32) * 5 / 9;
  roundedCelsius = parseFloat(celsius.toFixed(1));
  return roundedCelsius;
};
convertToCelsius(32 )// Fahrenheit to Celsius, should return 0

const convertToFahrenheit = function(celsius, fahrenheit, roundedFahrenheit) {
  fahrenheit = (celsius * 9 / 5) + 32;
  roundedFahrenheit = parseFloat(fahrenheit.toFixed(1));
  return roundedFahrenheit;
};
convertToFahrenheit(0) // Celsius to Fahrenheit, should return 32
// Formula
// (1°F − 32) × 5/9 = -17.
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
