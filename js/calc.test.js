const test = require("node:test");
const assert = require("node:assert");
const { gradeFromPercent, gradeFromFo, calcQuarter, percentOf } = require("./calc.js");

const q = (o = {}) =>
    calcQuarter({
        sum: "", quan: "", soch1: "", soch2: "", opIn: "", sochIn: "",
        sors: [["", ""], ["", ""], ["", ""], ["", ""]],
        ...o,
    });
const grade = o => gradeFromPercent(q(o).total);

test("gradeFromPercent: boundaries", () => {
    const cases = [
        [-0.1, "ERROR"], [0, 2], [39.9, 2], [40, 3], [64.9, 3],
        [65, 4], [84.9, 4], [85, 5], [100, 5], [100.1, "ERROR"],
        [Infinity, "ERROR"], [-Infinity, "ERROR"], [NaN, null],
    ];
    for (const [p, g] of cases) assert.strictEqual(gradeFromPercent(p), g, String(p));
});

test("gradeFromFo: table", () => {
    const expected = {
        0: [2, "низкий"], 1: [2, "низкий"], 2: [2, "низкий"], 3: [2, "низкий"],
        4: [3, "средний"], 5: [3, "средний"], 6: [3, "средний"],
        7: [4, "средний"], 8: [4, "высокий"], 9: [5, "высокий"], 10: [5, "высокий"],
    };
    for (const [fo, [g, level]] of Object.entries(expected))
        assert.deepStrictEqual(gradeFromFo(Number(fo)), { grade: g, level }, fo);
});

test("gradeFromFo: out of range is null", () => {
    for (const fo of [-1, 11, 5.5, NaN]) assert.strictEqual(gradeFromFo(fo), null, String(fo));
});

test("empty form -> 0, no modes", () => {
    assert.deepStrictEqual(q(), { opMode: "none", sochMode: "none", op: null, soch: null, total: 0 });
    assert.strictEqual(grade(), 2);
});

test("OP + SOCH from fields", () => {
    const r = q({ sum: "30", quan: "4", sors: [["20", "25"], ["18", "20"], ["", ""], ["", ""]], soch1: "20", soch2: "25" });
    assert.deepStrictEqual(r, { opMode: "calc", sochMode: "calc", op: 40, soch: 40, total: 80 });
    assert.strictEqual(gradeFromPercent(80), 4);
});

test("OP only: sum/quan/sors fraction", () => {
    assert.deepStrictEqual(q({ sum: "30", quan: "4" }), { opMode: "calc", sochMode: "none", op: 37.5, soch: null, total: 38 });
    const r = q({ sors: [["10", "20"], ["", ""], ["", ""], ["", ""]] });
    assert.deepStrictEqual(r, { opMode: "calc", sochMode: "none", op: 25, soch: null, total: 25 });
});

test("SOCH only", () => {
    assert.deepStrictEqual(q({ soch1: "20", soch2: "25" }), { opMode: "none", sochMode: "calc", op: null, soch: 40, total: 40 });
    assert.strictEqual(grade({ soch1: "20", soch2: "25" }), 3);
});

test("zero denominator -> 0, not NaN", () => {
    assert.deepStrictEqual(q({ sum: "5", quan: "0" }), { opMode: "calc", sochMode: "none", op: 0, soch: null, total: 0 });
    assert.deepStrictEqual(q({ soch1: "5", soch2: "0" }), { opMode: "none", sochMode: "calc", op: null, soch: 0, total: 0 });
});

test("computed OP + manual SOCH%", () => {
    assert.deepStrictEqual(q({ sum: "30", quan: "4", sochIn: "40" }), { opMode: "calc", sochMode: "manual", op: 37.5, soch: null, total: 78 });
});

test("manual OP% + computed SOCH", () => {
    assert.deepStrictEqual(q({ opIn: "30", soch1: "20", soch2: "25" }), { opMode: "manual", sochMode: "calc", op: null, soch: 40, total: 70 });
});

test("manual OP% + manual SOCH%", () => {
    assert.deepStrictEqual(q({ opIn: "30", sochIn: "40" }), { opMode: "manual", sochMode: "manual", op: null, soch: null, total: 70 });
});

test("manual OP% alone / SOCH% alone", () => {
    assert.deepStrictEqual(q({ opIn: "12.4" }), { opMode: "manual", sochMode: "none", op: null, soch: null, total: 12 });
    assert.deepStrictEqual(q({ sochIn: "33.5" }), { opMode: "none", sochMode: "manual", op: null, soch: null, total: 34 });
});

test("computed fields win over manual ones", () => {
    const r = q({ sum: "30", quan: "4", soch1: "20", soch2: "25", opIn: "50", sochIn: "50" });
    assert.strictEqual(r.opMode, "calc");
    assert.strictEqual(r.sochMode, "calc");
    assert.strictEqual(r.total, 78);
});

test("total is rounded to integer before grading", () => {
    assert.strictEqual(grade({ opIn: "20", sochIn: "19.5" }), 3);
    assert.strictEqual(grade({ opIn: "30", sochIn: "34.5" }), 4);
    assert.strictEqual(grade({ opIn: "30", sochIn: "54.5" }), 5);
    assert.strictEqual(grade({ opIn: "50", sochIn: "50.5" }), "ERROR");
});

test("clearing manual SOCH% returns sochMode to none", () => {
    const filled = { sum: "30", quan: "4", sochIn: "40" };
    assert.strictEqual(q(filled).sochMode, "manual");
    assert.strictEqual(q({ ...filled, sochIn: "" }).sochMode, "none");
});

test("percentOf: raw ratio, NaN/Infinity pass through to grading", () => {
    assert.strictEqual(percentOf(30, 40), 75);
    assert.strictEqual(gradeFromPercent(percentOf(5, 0)), "ERROR");
    assert.strictEqual(gradeFromPercent(percentOf(0, 0)), null);
});
