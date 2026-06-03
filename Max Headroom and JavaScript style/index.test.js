
const {getMax1, getMax2} = require("./index");

test("Functions should return same value", () =>{
    expect(getMax1().toString() == getMax2().toString());
})