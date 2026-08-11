// Starting code
// Array.prototype.filter = function (func) {
//   //nothing here, you will feel pretty awesome to write down by yourself
//   //have fun :)
// }

// My Solution
Array.prototype.filter = function(conditional) {
    let arr = [];

    this.forEach( function( currentValue ) {
      if(conditional(currentValue)) {
        arr.push(currentValue)
      };
    });
  return arr;
};

module.exports = { Array };