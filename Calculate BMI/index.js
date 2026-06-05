// Starting code
// function bmi(weight, height) {
//   return "";
// }

// My solution code also best practice
// function bmi(weight, height) {
//     let bmiValue = weight / (height **2)
//     if (bmiValue <= 18.5) {
//         return "Underweight";
//     } else if (bmiValue <= 25) {
//         return "Normal";
//     } else if (bmiValue <= 30) {
//         return "Overweight";
//     } else {
//         return "Obese"
//     }
// }

// Clever solution Code

const bmi = (w, h, bmi = w/(h**2)) =>   bmi <= 18.5 ? "Underweight" :
                                        bmi <= 25 ? "Normal" : 
                                        bmi <= 30 ? "Overweight" : "Obese";

                                        
module.exports = { bmi };