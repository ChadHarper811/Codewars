const { findStrangeValue } = require("./index")

test("Comparison: === should return false for the same value", () => {
    let x = findStrangeValue();
    let testPassed;
    if ( !(x === x) ){
        testPassed = true;
    } else {
        testPassed = false;
    }
    
    expect(testPassed).toBe(true);
})