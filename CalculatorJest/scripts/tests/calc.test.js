const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("Should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("Should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
        test("Should return 73 for 42 + 31", () => {
            expect(addition(42, 'donkey')).toBe(73);
        });
        test("Should return 73 for 42 + 31", () => {
            expect(addition()).toBe(73);
        });
        test("Should return 73.1 for 42.1 + 31", () => {
            expect(addition(42.1, 31)).toBe(73.1);
        });
    });
    describe("Subtract function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Divide function", () => {

    });
});