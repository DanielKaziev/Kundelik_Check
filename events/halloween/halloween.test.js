const test = require("node:test");
const assert = require("node:assert");
const { isHalloweenWindow } = require("./halloween.js");

test("окно: 28 окт – 1 ноя, любой год", () => {
    const at = (y, m, d) => isHalloweenWindow(new Date(y, m - 1, d));
    assert.strictEqual(at(2026, 10, 27), false);
    assert.strictEqual(at(2026, 10, 28), true);
    assert.strictEqual(at(2026, 10, 31), true);
    assert.strictEqual(at(2026, 11, 1), true);
    assert.strictEqual(at(2026, 11, 2), false);
    assert.strictEqual(at(2030, 10, 30), true);
});
