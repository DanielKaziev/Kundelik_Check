const RED = "#ff6666", ORANGE = "#f9a23b", GREEN = "#c2d23a";
const GRADE_COLOR = { 2: RED, 3: ORANGE, 4: GREEN, 5: GREEN };
const SO_LABEL = { 2: "ПЛХ(2)", 3: "УДВ(3)", 4: "ХОР(4)", 5: "ОТЛ(5)" };
const FO_LABEL = { 2: "Оценка: 2 (ПЛХ)", 3: "Оценка: 3 (УДВ)", 4: "Оценка: 4 (ХОР)", 5: "Оценка: 5 (ОТЛ)" };
const LEVEL_COLOR = { "низкий": RED, "средний": ORANGE, "высокий": GREEN };
const FO_TEXT = [
    "Выполнил до 10 % учебных заданий, допущены ошибки, на уроке пассивный, не делает выводы по итогам обратной связи с учителем, не проявляет самостоятельность при выполнении заданий, не знает пройденный материал",
    "Выполнил до 20 % учебных заданий, допущены ошибки, на уроке пассивный, не всегда делает соответствующие выводы по итогам обратной связи с учителем, не проявляет самостоятельность при выполнении заданий",
    "Выполнил до 30 % учебных заданий, допущены ошибки, стремится исправить свои ошибки, на уроке иногда проявляет активность, нуждается в поддержке учителя/родителей/сверстников при выполнений учебных заданий",
    "Выполнил до 40 % учебных заданий, допустил ошибки, нуждается в помощи при исправлении ошибок, не всегда проявляет активность, иногда  проявляет самостоятельность при выполнении заданий",
    "Выполнил до 50 % учебных заданий, допустил до 5-ти ошибок, нуждается в помощи учителя, на уроке не всегда активный, иногда проявляет самостоятельность при выполнении посильных заданий",
    "Выполнил до 60 % учебных заданий, допустил до 4-х ошибок, нуждается в помощи учителя, на уроке проявляет старательность, самостоятельно может выполнить задания средней сложности",
    "Выполнил до 70 % учебных заданий, допустил до 3-х ошибок, своевременно устранил ошибки, на уроке активный, проявляет самостоятельность при выполнении заданий",
    "Выполнил до 80 % учебных заданий, допустил 1-2 незначительных ошибок, на основе комментариев учителя самостоятельно исправляет свои ошибки, активный, самостоятельный",
    "Выполнил до 90 % учебных заданий, допустил незначительные неточности при выполнении  заданий, работает над ошибками, активный, самостоятельный",
    "Выполнил 100 % учебных заданий, не допустил ошибок, активный, самостоятельный, может объяснить, обосновать свои ответы"
];

const SOR_GROUPS = [
    ["sor1", "sor2", "sor_1"],
    ["sor3", "sor4", "sor_2"],
    ["sor5", "sor6", "sor_3"],
    ["sor7", "sor8", "sor_4"]
];
const SOCH_GROUP = ["soch1-new", "soch2-new", "soch-new"];
const COLORED_GROUPS = [...SOR_GROUPS, SOCH_GROUP];
const SUM_IDS = ["sum", "quan", ...SOR_GROUPS.flatMap(([a, b]) => [a, b])];
const SOCH_IDS = [SOCH_GROUP[0], SOCH_GROUP[1]];
const QUARTER_INPUT_IDS = [...SUM_IDS, ...SOCH_IDS, "op-in-new", "soch-in-new"];
const MODE_CONTAINERS = { new: "new-container", so: "so-container", fo: "fo-container" };

const $ = id => document.getElementById(id);
const val = id => $(id).value;
const show = (id, visible) => { $(id).hidden = !visible; };
const setDisabled = (ids, flag) => ids.forEach(id => { $(id).disabled = flag; });
const paint = (id, color) => { $(id).style.backgroundColor = color; };
const setThemeColor = color => document.querySelector("meta[name=theme-color]").setAttribute("content", color);

function resetEmptyState() {
    if (QUARTER_INPUT_IDS.every(id => val(id) === "")) {
        $("output-text-new").textContent = "";
        $("output-text-new").removeAttribute("style");
    }
    COLORED_GROUPS.forEach(([a, b, box]) => {
        if (val(a) === "" && val(b) === "") paint(box, GREEN);
    });
    if (val("fo1") === "") {
        ["output-fo-help", "output-fo-help-new", "output-fo-two"].forEach(id => show(id, false));
        paint("fo-main", GREEN);
    }
    if (val("so1") === "" && val("so2") === "") {
        paint("so-main", GREEN);
        show("output-so-help", false);
    }
}

function paintGroups() {
    COLORED_GROUPS.forEach(([a, b, box]) => {
        const pct = Number(percentOf(Number(val(a)), Number(val(b))).toFixed());
        if (!Number.isFinite(pct)) return;
        const grade = gradeFromPercent(pct);
        paint(box, grade === "ERROR" ? RED : GRADE_COLOR[grade]);
    });
}

function applyModes(r) {
    setDisabled(SUM_IDS, r.opMode === "manual");
    show("op-one", r.opMode !== "calc");
    show("op-two", r.opMode === "calc");
    setDisabled(SOCH_IDS, r.sochMode === "manual");
    show("soch-one", r.sochMode !== "calc");
    show("soch-two", r.sochMode === "calc");
}

function updateQuarter() {
    const r = calcQuarter({
        sum: val("sum"),
        quan: val("quan"),
        sors: SOR_GROUPS.map(([a, b]) => [val(a), val(b)]),
        soch1: val("soch1-new"),
        soch2: val("soch2-new"),
        opIn: val("op-in-new"),
        sochIn: val("soch-in-new")
    });

    if (r.op !== null) $("op-out-new").textContent = r.op.toFixed(1) + "%";
    if (r.soch !== null) $("soch-out-new").textContent = r.soch.toFixed(1) + "%";
    $("summa-out-new").textContent = r.total + "%";
    applyModes(r);

    const grade = gradeFromPercent(r.total);
    const color = grade === "ERROR" ? RED : GRADE_COLOR[grade];
    $("output-text-new").textContent = grade === "ERROR" ? "Где-то ошибка ..." : "Оценка за четверть: " + grade;
    paint("output-text-new", color);
    setThemeColor(color);

    resetEmptyState();
    paintGroups();
}

function updateSo() {
    const pct = percentOf(Number(val("so1")), Number(val("so2")));
    $("output-pre").textContent = Number.isFinite(pct) ? pct.toFixed(1) + "%" : "0%";

    const grade = gradeFromPercent(pct);
    if (grade === "ERROR") {
        $("output-pre").textContent = "ERROR";
        $("output-pre-otv").textContent = "ERROR";
        paint("output-pre", RED);
        paint("output-pre-otv", RED);
        setThemeColor(RED);
        show("output-so-help", true);
    } else if (grade !== null) {
        const color = GRADE_COLOR[grade];
        paint("output-pre", color);
        paint("output-pre-otv", color);
        paint("so-main", color);
        $("output-pre-otv").textContent = SO_LABEL[grade];
        setThemeColor(color);
        show("output-so-help", true);
    }
    resetEmptyState();
}

function updateFo() {
    const fo = Number(val("fo1"));
    const result = gradeFromFo(fo);
    const color = result ? GRADE_COLOR[result.grade] : RED;

    paint("fo-main", color);
    paint("output-fo-one", color);
    paint("output-fo-two", color);
    ["output-fo-two", "output-fo-help", "output-fo-help-new"].forEach(id => show(id, true));
    setThemeColor(color);
    if (result) {
        $("output-fo-one").textContent = FO_LABEL[result.grade];
        $("output-fo").textContent = FO_TEXT[Math.max(fo, 1) - 1];
        $("output-fo-three").textContent = "Уровень знаний: " + result.level;
        paint("output-fo-three", LEVEL_COLOR[result.level]);
    } else {
        $("output-fo-one").textContent = "ERROR";
        $("output-fo").textContent = "Упс, у вас ошибка.";
        $("output-fo-three").textContent = "ERROR";
        paint("output-fo-three", RED);
    }
    resetEmptyState();
}

function showMode(mode) {
    Object.entries(MODE_CONTAINERS).forEach(([m, id]) => show(id, m === mode));
    if (mode === "so") updateSo();
}

function onModeChange(e) {
    const box = e.target;
    if (box.checked) $(box.id === "mode-so" ? "mode-fo" : "mode-so").checked = false;
    showMode(box.checked ? box.id.slice("mode-".length) : "new");
}

$("new-container").addEventListener("change", updateQuarter);
$("so-container").addEventListener("change", updateSo);
$("fo-container").addEventListener("change", updateFo);
["mode-so", "mode-fo"].forEach(id => $(id).addEventListener("change", onModeChange));
