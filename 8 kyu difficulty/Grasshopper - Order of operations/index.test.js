const { orderOperations } = require("./index")

const func = orderOperations.toString()

describe("orderOperations", () => {
    test("should not use any numbers other than 2", () => {
        let re = /([0,1,3,4,5,6,7,8,9])/gi
        let others = func.match(re)
        expect(others).toBe(null)
    });

    test("should have the plus and the multiplication in the same place", () => {
        let re = /[+,*]/gi
        let operators = func.match(re)
        expect(operators[0]).toBe("+")
        expect(operators[1]).toBe("*")
        expect(operators[2]).toBe("+")
        expect(operators[3]).toBe("*")
    });

    test("should get the correct number", () => {
        expect(orderOperations()).toBe(32)
    });
})