const { Array } = require("./index")

describe("Tests", () => {
    test("Function returns new array with filtered items", () => {
        let testArray = [1,2,3,4]
        expect(testArray.filter(num => num > 3)).toStrictEqual([4])
    });
});

