// **Instructions**
// Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.
//    snoopy.bark(); // return "Woof"
//    scoobydoo.bark(); // undefined
// Use method prototypes to enable all Dogs to bark.

// Starting code 
// function Dog (breed) {
//   this.breed = breed;
// }

// var snoopy = new Dog("Beagle");

// Dog.prototype.bark = function() {
//   return "Woof";
// };

// var scoobydoo = new Dog("Great Dane");


// Solution code
// function Dog (breed) {
//   this.breed = breed;
// }

// let snoopy = new Dog("Beagle");

// let scoobydoo = new Dog("Great Dane");

// Dog.prototype.bark = function() {
//   return "Woof";
// };

// Best Practice code
class Dog {
  constructor(breed) {
    this.breed = breed;
  }

  bark() {
    return "Woof"
  }
}

let snoopy = new Dog("Beagle");

let scoobydoo = new Dog("Great Dane");

module.exports = { snoopy, scoobydoo };