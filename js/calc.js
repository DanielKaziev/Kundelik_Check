(function (root) {
    const GRADE_STEPS = [[40, 2], [65, 3], [85, 4]];
    const MAX_FO = 10;
    const OP_SHARE = 50;
    const SOCH_SHARE = 50;
    const OP_FO_WEIGHT = 10;

    const has = v => String(v == null ? "" : v).length > 0;
    const finiteOrZero = x => (isNaN(x) || !isFinite(x) ? 0 : x);
    const round1 = x => Number(x.toFixed(1));
    const roundInt = x => Number(round1(x).toFixed());
    const percentOf = (a, b) => (a / b) * 100;

    function gradeFromPercent(p) {
        if (isNaN(p)) return null;
        if (p < 0 || p > 100) return "ERROR";
        const step = GRADE_STEPS.find(([limit]) => p < limit);
        return step ? step[1] : 5;
    }

    function gradeFromFo(fo) {
        if (!Number.isInteger(fo) || fo < 0 || fo > MAX_FO) return null;
        if (fo <= 3) return { grade: 2, level: "низкий" };
        if (fo <= 6) return { grade: 3, level: "средний" };
        if (fo === 7) return { grade: 4, level: "средний" };
        if (fo === 8) return { grade: 4, level: "высокий" };
        return { grade: 5, level: "высокий" };
    }

    // opMode/sochMode: "calc" - computed from fields, "manual" - typed percent, "none" - nothing entered.
    function calcQuarter(f) {
        const sum = Number(f.sum), quan = Number(f.quan);
        const soch1 = Number(f.soch1), soch2 = Number(f.soch2);
        const opIn = Number(f.opIn), sochIn = Number(f.sochIn);
        const prem1 = f.sors.reduce((a, s) => a + Number(s[0]), 0);
        const prem2 = f.sors.reduce((a, s) => a + Number(s[1]), 0);

        const sumOp = sum + quan + prem1 + prem2;
        const sumSoch = soch1 + soch2;
        const anyOp = [f.sum, f.quan, ...f.sors.flat()].some(has);

        const op = () => finiteOrZero(((prem1 + sum) / (prem2 + quan * OP_FO_WEIGHT)) * OP_SHARE);
        const soch = () => finiteOrZero((soch1 / soch2) * SOCH_SHARE);
        const result = (opMode, sochMode, o, s, total) => ({ opMode, sochMode, op: o, soch: s, total });

        if (sumOp > 0 && sumSoch > 0) {
            const o = op(), s = soch();
            return result("calc", "calc", o, s, roundInt(round1(o) + round1(s)));
        }
        if (sumOp > 0 && sochIn > 0) {
            const o = op();
            return result("calc", "manual", o, null, roundInt(round1(o) + sochIn));
        }
        if (opIn > 0 && sumSoch > 0) {
            const s = soch();
            return result("manual", "calc", null, s, roundInt(opIn + round1(s)));
        }
        if (opIn > 0 && sochIn > 0) return result("manual", "manual", null, null, roundInt(opIn + sochIn));
        if (anyOp) {
            const o = op();
            return result("calc", "none", o, null, roundInt(o));
        }
        if (has(f.soch1) || has(f.soch2)) {
            const s = soch();
            return result("none", "calc", null, s, roundInt(s));
        }
        if (opIn > 0) return result("manual", "none", null, null, Number(opIn.toFixed()));
        if (sochIn > 0) return result("none", "manual", null, null, Number(sochIn.toFixed()));
        return result("none", "none", null, null, 0);
    }

    const api = { gradeFromPercent, gradeFromFo, calcQuarter, percentOf };
    if (typeof module !== "undefined" && module.exports) module.exports = api;
    else Object.assign(root, api);
})(typeof globalThis !== "undefined" ? globalThis : this);
