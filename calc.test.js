const test = require("node:test");
const assert = require("node:assert");
const { gradeFromPercent, gradeFromFo, calcQuarter } = require("./calc.js");

const q = (o = {}) =>
    calcQuarter({
        sum: "", quan: "", soch1: "", soch2: "", opIn: "", sochIn: "",
        sors: [["", ""], ["", ""], ["", ""], ["", ""]],
        ...o,
    });
const grade = o => gradeFromPercent(Number(q(o).total));

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

test("empty form -> 0, branch 9", () => {
    assert.deepStrictEqual(q(), { branch: 9, op: null, soch: null, total: "0" });
    assert.strictEqual(grade(), 2);
});

test("OP + SOCH from fields (branch 1)", () => {
    const r = q({ sum: "30", quan: "4", sors: [["20", "25"], ["18", "20"], ["", ""], ["", ""]], soch1: "20", soch2: "25" });
    assert.deepStrictEqual(r, { branch: 1, op: 40, soch: 40, total: "80" });
    assert.strictEqual(gradeFromPercent(80), 4);
});

test("OP only (branch 5): sum/quan/sors fraction", () => {
    assert.deepStrictEqual(q({ sum: "30", quan: "4" }), { branch: 5, op: 37.5, soch: null, total: "38" });
    const r = q({ sors: [["10", "20"], ["", ""], ["", ""], ["", ""]] });
    assert.deepStrictEqual(r, { branch: 5, op: 25, soch: null, total: "25" });
});

test("SOCH only (branch 6)", () => {
    assert.deepStrictEqual(q({ soch1: "20", soch2: "25" }), { branch: 6, op: null, soch: 40, total: "40" });
    assert.strictEqual(grade({ soch1: "20", soch2: "25" }), 3);
});

test("zero denominator -> 0, not NaN", () => {
    assert.deepStrictEqual(q({ sum: "5", quan: "0" }), { branch: 5, op: 0, soch: null, total: "0" });
    assert.deepStrictEqual(q({ soch1: "5", soch2: "0" }), { branch: 6, op: null, soch: 0, total: "0" });
});

test("computed OP + manual SOCH% (branch 2)", () => {
    assert.deepStrictEqual(q({ sum: "30", quan: "4", sochIn: "40" }), { branch: 2, op: 37.5, soch: null, total: "78" });
});

test("manual OP% + computed SOCH (branch 3)", () => {
    assert.deepStrictEqual(q({ opIn: "30", soch1: "20", soch2: "25" }), { branch: 3, op: null, soch: 40, total: "70" });
});

test("manual OP% + manual SOCH% (branch 4)", () => {
    assert.deepStrictEqual(q({ opIn: "30", sochIn: "40" }), { branch: 4, op: null, soch: null, total: "70" });
});

test("manual OP% alone / SOCH% alone (branches 7, 8)", () => {
    assert.deepStrictEqual(q({ opIn: "12.4" }), { branch: 7, op: null, soch: null, total: "12" });
    assert.deepStrictEqual(q({ sochIn: "33.5" }), { branch: 8, op: null, soch: null, total: "34" });
});

test("computed fields win over manual ones", () => {
    const r = q({ sum: "30", quan: "4", soch1: "20", soch2: "25", opIn: "50", sochIn: "50" });
    assert.strictEqual(r.branch, 1);
    assert.strictEqual(r.total, "78");
});

test("total is rounded to integer before grading", () => {
    assert.strictEqual(grade({ opIn: "20", sochIn: "19.5" }), 3);
    assert.strictEqual(grade({ opIn: "30", sochIn: "34.5" }), 4);
    assert.strictEqual(grade({ opIn: "30", sochIn: "54.5" }), 5);
    assert.strictEqual(grade({ opIn: "50", sochIn: "50.5" }), "ERROR");
});
