const test = require("node:test");
const assert = require("node:assert");
const { isNewYearWindow } = require("./newyear.js");

test("окно: 15 дек – 3 янв, любой год", () => {
    const at = (y, m, d) => isNewYearWindow(new Date(y, m - 1, d));
    assert.strictEqual(at(2026, 12, 14), false);
    assert.strictEqual(at(2026, 12, 15), true);
    assert.strictEqual(at(2026, 12, 31), true);
    assert.strictEqual(at(2027, 1, 1), true);
    assert.strictEqual(at(2027, 1, 3), true);
    assert.strictEqual(at(2027, 1, 4), false);
    assert.strictEqual(at(2030, 12, 20), true);
});
