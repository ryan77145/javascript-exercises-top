const convertToCelsius = function(degreesF) {
  let formula = (degreesF - 32) * 5/9;
  return Math.round(formula * 10) / 10;
};

const convertToFahrenheit = function(degreesC) {
  let formula = (degreesC * 9/5) + 32;
  return Math.round(formula * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
