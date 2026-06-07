// **Instructions**
// In JavaScript, there is a special case where strict comparison of the same variable returns false! Try to find out what must be done to get such result!
//         var x = something;
//         x === x // returns false!
// Write a function which will return value for which strict comparison will give false!

// Starting code
// function findStrangeValue() {
//   // your code!
// }

// My colution code
function findStrangeValue() {
  return NaN;
}

module.exports = { findStrangeValue };