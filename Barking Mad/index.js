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
function Dog (breed) {
  this.breed = breed;
}

let snoopy = new Dog("Beagle");

let scoobydoo = new Dog("Great Dane");

snoopy.bark = function() {
  return "Woof";
};

scoobydoo.bark = function() {
  return "Woof";
};

module.exports = { snoopy, scoobydoo };