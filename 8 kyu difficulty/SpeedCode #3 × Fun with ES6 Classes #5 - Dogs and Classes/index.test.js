const { Dog, Labrador } = require("./index");

test("should instantiate objects as expected with values for spitsy", () =>{
    let spitsy = new Labrador("Spitsy", 10, "Male", "Donald");
    expect(spitsy.name).toBe("Spitsy");
    expect(spitsy.age).toBe(10);
    expect(spitsy.gender).toBe("Male");
    expect(spitsy.species).toBe("Labrador");
    expect(spitsy.legs).toBe(4);
    expect(spitsy.size).toBe("large");
    expect(spitsy.master).toBe("Donald");
    expect(spitsy.loyal).toBe(true);
})

test("should instantiate objects as expected with values for spitsy", () =>{
    let edward = new Labrador("Edward", 3, "Male", "Emma");
    expect(spitsy.name).toBe("Edward");
    expect(spitsy.age).toBe(3);
    expect(spitsy.gender).toBe("Male");
    expect(spitsy.species).toBe("Labrador");
    expect(spitsy.legs).toBe(4);
    expect(spitsy.size).toBe("large");
    expect(spitsy.master).toBe("Emma");
    expect(spitsy.loyal).toBe(true);
})