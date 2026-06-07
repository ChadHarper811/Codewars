const { Math } = require("./index")

describe(" Tests", () => {
    test("Function returns number rounded to the 'precision' decimal place", () => {
        expect(Math.roundTo(3.1415926535, 4)).toBe(3.1416)
        expect(Math.roundTo(4, 5)).toBe(4)
        expect(Math.roundTo(4.1235343424, 6)).toBe(4.123534)
        expect(Math.roundTo(5.3035802, 3)).toBe(5.304)
        expect(Math.roundTo(0.9384930193848595, 15)).toBe(0.938493019384860)
        expect(Math.roundTo(9.9999, 3)).toBe(10)
    });
});
