const { snoopy, scoobydoo } = require("./index")

test("both objects should have method for bark to return string Woof", () => {
    expect(snoopy.bark() === "Woof" && scoobydoo.bark() === "Woof")
})