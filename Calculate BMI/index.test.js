const { bmi } = require("./index");

test("Function returns 'Underweight' for weight = 50 and height = 1.80", () => {
    expect(bmi(50,1.80)).toBe("Underweight");
});

test("Function returns 'Normal' for weight = 80 and height = 1.80", () => {
    expect(bmi(80,1.80)).toBe("Normal");
});

test("Function returns 'Overweight' for weight = 90 and height = 1.80", () => {
    expect(bmi(90,1.80)).toBe("Overweight");
});

test("Function returns 'Obese' for weight = 100 and height = 1.80", () => {
    expect(bmi(100,1.80)).toBe("Obese");
});