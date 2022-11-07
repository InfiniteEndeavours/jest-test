/**
 * @jest-environment jsdom
 */

// Imports buttonClick from button.js
const buttonClick = require("../button");

// Before each test, set the innerHTML of paragraph with id par to be empty
beforeEach( () => {
    // File System Handling Module - Open/Read/Write files
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    // Opens the DOM
    document.open();
    // Writes to the DOM using file in fileContents variable
    document.write(fileContents);
    // Closes the DOM
    document.close();
});

// Describes test
describe("DOM tests", () => {
    // Defines test
    test("Expects p content to change", () => {
        // Calls buttonClick as part of test
        buttonClick();
        // Checks if the inner html of element with id par has been changed
        expect(document.getElementById('par').innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});