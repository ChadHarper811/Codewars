// **Instructions**
// For this problem you must create a program that says who ate the last cookie.
// If the input is a string then "Zach" ate the cookie.
// If the input is a Number then "Monica" ate the cookie.
// If the input is anything else "the dog" ate the cookie.
// The way to return the statement is: "Who ate the last cookie? It was (name)!"
// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)
// Note: Make sure you return the correct message with correct spaces and punctuation.

// starting code
// function cookie(x){
//   // ...
// }

// My solution code
// function cookie(input){
//     if (typeof input === "string") {
//         return "Who ate the last cookie? It was Zach!"
//     } else if (typeof input === "number") {
//       return "Who ate the last cookie? It was Monica!"
//     } else {
//         return "Who ate the last cookie? It was the dog!"
//     }
// };

// Possible best practice solution
const typeObj = {
    "string": "Zach",
    "number": "Monica"
}

function cookie(input){
    let type = typeof input;
    let who = (typeObj[type]) ? typeObj[type] : "the dog";
    return `Who ate the last cookie? It was ${who}!`
};

module.exports = { cookie };