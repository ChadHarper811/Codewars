const { cookie } = require("./index")

test("function with string input should return 'Who ate the last cookie? It was Zach!'", () => {
    expect(cookie("Ryan")).toBe("Who ate the last cookie? It was Zach!");
});

test("function with number input should return 'Who ate the last cookie? It was Monica!'", () => {
    expect(cookie(26)).toBe("Who ate the last cookie? It was Monica!");
    expect(cookie(2.3)).toBe("Who ate the last cookie? It was Monica!")
});


test("function with input other than string or number should return 'Who ate the last cookie? It was dog!'", () => {
    expect(cookie(true)).toBe("Who ate the last cookie? It was the dog!");
});