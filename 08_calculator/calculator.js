
const add = function(firstNum, secondNum) {

  return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {

  return firstNum - secondNum;
};

const sum = function(emptyArray) {
  return emptyArray.reduce(function(acc , curr) {
  return acc + curr;
  }, 0);
};

sum([]);

const multiply = function(array) {
  return array.reduce(function(acc , curr) {
    return acc * curr;
  });
};


const power = function(base, exp) {
  return Math.pow(base, exp);
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
