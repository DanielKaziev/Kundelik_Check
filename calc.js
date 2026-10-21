(function (root) {
    const has = v => String(v == null ? "" : v).length > 0;
    const finiteOrZero = x => (isNaN(x) || !isFinite(x) ? 0 : x);
    const round1 = x => Number(x.toFixed(1));
    const roundInt = x => Number(x.toFixed(1)).toFixed();

    function gradeFromPercent(p) {
        if (isNaN(p)) return null;
        if (p < 0 || p > 100) return "ERROR";
        if (p < 40) return 2;
        if (p < 65) return 3;
        if (p < 85) return 4;
        return 5;
    }

    function gradeFromFo(fo) {
        if (!Number.isInteger(fo) || fo < 0 || fo > 10) return null;
        if (fo <= 3) return { grade: 2, level: "низкий" };
        if (fo <= 6) return { grade: 3, level: "средний" };
        if (fo === 7) return { grade: 4, level: "средний" };
        if (fo === 8) return { grade: 4, level: "высокий" };
        return { grade: 5, level: "высокий" };
    }

    // `branch` is the 1..9 input combination (see FOPlan UI toggles); op/soch are null when not computed.
    function calcQuarter(f) {
        const sum = Number(f.sum), quan = Number(f.quan);
        const soch1 = Number(f.soch1), soch2 = Number(f.soch2);
        const opIn = Number(f.opIn), sochIn = Number(f.sochIn);
        const prem1 = f.sors.reduce((a, s) => a + Number(s[0]), 0);
        const prem2 = f.sors.reduce((a, s) => a + Number(s[1]), 0);

        const sumOp = sum + quan + prem1 + prem2;
        const sumSoch = soch1 + soch2;
        const anyOp = [f.sum, f.quan, ...f.sors.flat()].some(has);

        const op = () => finiteOrZero(((prem1 + sum) / (prem2 + quan * 10)) * 50);
        const soch = () => finiteOrZero((soch1 / soch2) * 50);

        if (sumOp > 0 && sumSoch > 0) {
            const o = op(), s = soch();
            return { branch: 1, op: o, soch: s, total: roundInt(round1(o) + round1(s)) };
        }
        if (sumOp > 0 && sochIn > 0) {
            const o = op();
            return { branch: 2, op: o, soch: null, total: roundInt(round1(o) + sochIn) };
        }
        if (opIn > 0 && sumSoch > 0) {
            const s = soch();
            return { branch: 3, op: null, soch: s, total: roundInt(opIn + round1(s)) };
        }
        if (opIn > 0 && sochIn > 0) {
            return { branch: 4, op: null, soch: null, total: roundInt(opIn + sochIn) };
        }
        if (anyOp) {
            const o = op();
            return { branch: 5, op: o, soch: null, total: round1(o).toFixed() };
        }
        if (has(f.soch1) || has(f.soch2)) {
            const s = soch();
            return { branch: 6, op: null, soch: s, total: round1(s).toFixed() };
        }
        if (opIn > 0) return { branch: 7, op: null, soch: null, total: opIn.toFixed() };
        if (sochIn > 0) return { branch: 8, op: null, soch: null, total: sochIn.toFixed() };
        return { branch: 9, op: null, soch: null, total: "0" };
    }

    const api = { gradeFromPercent, gradeFromFo, calcQuarter };
    if (typeof module !== "undefined" && module.exports) module.exports = api;
    else Object.assign(root, api);
})(this);
