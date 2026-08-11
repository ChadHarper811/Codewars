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