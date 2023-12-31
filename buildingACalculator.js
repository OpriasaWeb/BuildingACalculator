// June 12, 2023
// CodeWars: Building A Calculator (7 kyu challenge)
// Description: The test expects you to provide a Calculator object with the following methods:
// Calculator.add()
// Calculator.subtract()
// Calculator.multiply()
// Calculator.divide()
// Each method expects two arguments, so for instance:

// Calculator.add(1,4) should return 5.

// Only integers are expected to be passed in as arguments, and the divide method should return 'false' when trying the divide by zero.


var Calculator = {
  add: function (a, b){
    return a + b;
  },
  subtract: function (a, b){
    return a - b;
  },
  multiply: function (a, b){
    return a * b;
  },
  divide: function(a, b){
    if(a == 0 || b == 0){
    return false;
    } else{
      return a / b;
    }
  }
};

// ----- Best Practices ----- //

// var Calculator = {
//   add:     (a, b) => a + b,
//   subtract:(a, b) => a - b,
//   multiply:(a, b) => a * b,
//   divide:  (a, b) => b ? a / b : false
// };

// ----- Best Practices ----- //