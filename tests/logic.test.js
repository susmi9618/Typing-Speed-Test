
const {
    countCorrectCharacters,
    calculateWPM,
    calculateAccuracy
} = require("../logic.js");

const test = require("node:test");
const assert = require("node:assert");

test("Correct character count", () => {
    assert.strictEqual(
        countCorrectCharacters("hello", "heLlo"),
        4
    );
});

test("WPM calculation", () => {
    assert.strictEqual(calculateWPM(10, 60), 2);
});

test("Accuracy calculation", () => {
    assert.strictEqual(calculateAccuracy(4, 5), 80);
});

test("Zero time calculation", () => {
    assert.strictEqual(calculateWPM(10, 0), 0);
});
