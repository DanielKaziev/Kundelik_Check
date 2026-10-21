function CheckIsEmpty() {
    let sum = Number(document.getElementById("sum").value);
    let quan = Number(document.getElementById("quan").value);
    let sor1 = Number(document.getElementById("sor1").value);
    let sor2 = Number(document.getElementById("sor2").value);
    let sor3 = Number(document.getElementById("sor3").value);
    let sor4 = Number(document.getElementById("sor4").value);
    let sor5 = Number(document.getElementById("sor5").value);
    let sor6 = Number(document.getElementById("sor6").value);
    let sor7 = Number(document.getElementById("sor7").value);
    let sor8 = Number(document.getElementById("sor8").value);
    let soch1_new = Number(document.getElementById("soch1-new").value);
    let soch2_new = Number(document.getElementById("soch2-new").value);
    let op_in_new = Number(document.getElementById("op-in-new").value);
    let soch_in_new = Number(document.getElementById("soch-in-new").value);
    if (sum == "" && quan == "" && sor1 == "" && sor2 == "" && sor3 == "" && sor4 == "" && sor5 == "" && sor6 == "" && sor7 == "" & sor8 == "" & soch1_new == "" && soch2_new == "" && op_in_new == "" && soch_in_new == "") {
        let output_text_new = document.getElementById("output-text-new");
        output_text_new.innerHTML = "";
        output_text_new.removeAttribute('style');
    }
    if (sor1 == "" && sor2 == "") {
        document.getElementById("sor_1").style.backgroundColor = "#c2d23a";
    }
    if (sor3 == "" && sor4 == "") {
        document.getElementById("sor_2").style.backgroundColor = "#c2d23a";
    }
    if (sor5 == "" && sor6 == "") {
        document.getElementById("sor_3").style.backgroundColor = "#c2d23a";
    }
    if (sor7 == "" && sor8 == "") {
        document.getElementById("sor_4").style.backgroundColor = "#c2d23a";
    }
    if (soch1_new == "" && soch2_new == "") {
        document.getElementById("soch-new").style.backgroundColor = "#c2d23a";
    }

    let fo1 = document.getElementById("fo1").value;
    if (fo1 == ""){
        document.getElementById("output-fo-help").setAttribute("hidden", "hidden");
        document.getElementById("output-fo-help-new").setAttribute("hidden", "hidden");
        document.getElementById("output-fo-two").setAttribute("hidden", "hidden");
        document.getElementById("fo-main").style.backgroundColor = "#c2d23a";
    }

    let so1 = document.getElementById("so1").value;
    let so2 = document.getElementById("so2").value;
    if (so1 == "" && so2 =="") {
        document.getElementById("so-main").style.backgroundColor = "#c2d23a";
        document.getElementById("output-so-help").setAttribute("hidden", "hidden");
    }

}

function CallOneSO() {  
    if (document.getElementById("sor/soch").checked == true) {
        document.getElementById("fo-pln").checked = false;
        document.getElementById("so-container").removeAttribute("hidden", "hidden");
        document.getElementById("new-container").setAttribute("hidden", "hidden");
        document.getElementById("fo-container").setAttribute("hidden", "hidden");
        OneSO();
    } else {
        document.getElementById("so-container").setAttribute("hidden", "hidden");
        document.getElementById("fo-container").setAttribute("hidden", "hidden");
        document.getElementById("new-container").removeAttribute("hidden", "hidden");
        document.getElementById("output-so").removeAttribute("hidden", "hidden");
    }
}

var RED = "#ff6666", ORANGE = "#f9a23b", GREEN = "#c2d23a";
var GRADE_COLOR = { 2: RED, 3: ORANGE, 4: GREEN, 5: GREEN };
var SO_LABEL = { 2: "ПЛХ(2)", 3: "УДВ(3)", 4: "ХОР(4)", 5: "ОТЛ(5)" };
var FO_LABEL = { 2: "Оценка: 2 (ПЛХ)", 3: "Оценка: 3 (УДВ)", 4: "Оценка: 4 (ХОР)", 5: "Оценка: 5 (ОТЛ)" };
var LEVEL_COLOR = { "низкий": RED, "средний": ORANGE, "высокий": GREEN };
var FO_TEXT = [
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

function setThemeColor(color) {
    document.querySelector("meta[name=theme-color]").setAttribute("content", color);
}

function OneSO() {
    var so1 = Number(document.getElementById("so1").value);
    var so2 = Number(document.getElementById("so2").value);
    var output_pre = document.getElementById("output-pre");
    var output_pre_otv = document.getElementById("output-pre-otv");
    var so_main = document.getElementById("so-main");

    var result_so = so1 / so2 * 100;
    if (isNaN(result_so) == true || isFinite(result_so) == false){
        output_pre.innerHTML = "0%";
    } else {
        output_pre.innerHTML = result_so.toFixed(1) + "%";
    }

    var grade = gradeFromPercent(result_so);
    if (grade === "ERROR") {
        output_pre.innerHTML = "ERROR";
        output_pre_otv.innerHTML = "ERROR";
        output_pre.style.backgroundColor = RED;
        output_pre_otv.style.backgroundColor = RED;
        setThemeColor(RED);
        document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
    } else if (grade !== null) {
        var color = GRADE_COLOR[grade];
        output_pre.style.backgroundColor = color;
        output_pre_otv.style.backgroundColor = color;
        so_main.style.backgroundColor = color;
        output_pre_otv.innerHTML = SO_LABEL[grade];
        setThemeColor(color);
        document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
    }
    CheckIsEmpty();
}

function OneFO() {
    var fo = Number(document.getElementById("fo1").value);
    var result = gradeFromFo(fo);
    var color = result ? GRADE_COLOR[result.grade] : RED;

    document.getElementById("fo-main").style.backgroundColor = color;
    document.getElementById("output-fo-one").style.backgroundColor = color;
    document.getElementById("output-fo-two").style.backgroundColor = color;
    document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
    document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
    document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
    setThemeColor(color);
    if (result) {
        document.getElementById("output-fo-one").innerHTML = FO_LABEL[result.grade];
        document.getElementById("output-fo").innerHTML = FO_TEXT[Math.max(fo, 1) - 1];
        document.getElementById("output-fo-three").innerHTML = "Уровень знаний: " + result.level;
        document.getElementById("output-fo-three").style.backgroundColor = LEVEL_COLOR[result.level];
    } else {
        document.getElementById("output-fo-one").innerHTML = "ERROR";
        document.getElementById("output-fo").innerHTML = "Упс, у вас ошибка.";
        document.getElementById("output-fo-three").innerHTML = "ERROR";
        document.getElementById("output-fo-three").style.backgroundColor = RED;
    }
    CheckIsEmpty();
}

function CallOneFO() {
    if (document.getElementById("fo-pln").checked == true) {
        document.getElementById("sor/soch").checked = false;
        document.getElementById("so-container").setAttribute("hidden", "hidden");
        document.getElementById("new-container").setAttribute("hidden", "hidden");
        document.getElementById("fo-container").removeAttribute("hidden", "hidden");
    } else {
        document.getElementById("so-container").setAttribute("hidden", "hidden");
        document.getElementById("fo-container").setAttribute("hidden", "hidden");
        document.getElementById("new-container").removeAttribute("hidden", "hidden");
    }
}

function enableSum() {
    document.getElementById("sum").disabled = false;
    document.getElementById("quan").disabled = false;
    document.getElementById("sor1").disabled = false;
    document.getElementById("sor2").disabled = false;
    document.getElementById("sor3").disabled = false;
    document.getElementById("sor4").disabled = false;
    document.getElementById("sor5").disabled = false;
    document.getElementById("sor6").disabled = false;
    document.getElementById("sor7").disabled = false;
    document.getElementById("sor8").disabled = false;
    document.getElementById("op-two").removeAttribute("hidden", "hidden");
    document.getElementById("op-one").setAttribute("hidden", "hidden");
}
function disableSum() {
    document.getElementById("sum").disabled = true;
    document.getElementById("quan").disabled = true;
    document.getElementById("sor1").disabled = true;
    document.getElementById("sor2").disabled = true;
    document.getElementById("sor3").disabled = true;
    document.getElementById("sor4").disabled = true;
    document.getElementById("sor5").disabled = true;
    document.getElementById("sor6").disabled = true;
    document.getElementById("sor7").disabled = true;
    document.getElementById("sor8").disabled = true;
    document.getElementById("op-one").removeAttribute("hidden", "hidden");
    document.getElementById("op-two").setAttribute("hidden", "hidden");
}
function enableSoch() {
    document.getElementById("soch1-new").disabled = false;
    document.getElementById("soch2-new").disabled = false;
    document.getElementById("soch-two").removeAttribute("hidden", "hidden");
    document.getElementById("soch-one").setAttribute("hidden", "hidden");
}
function disableSoch() {
    document.getElementById("soch1-new").disabled = true;
    document.getElementById("soch2-new").disabled = true;
    document.getElementById("soch-one").removeAttribute("hidden", "hidden");
    document.getElementById("soch-two").setAttribute("hidden", "hidden");
}

function FOPlan() {
    var sum = document.getElementById("sum").value;
    var quan = document.getElementById("quan").value;
    var sors = [];
    for (var i = 1; i <= 8; i += 2) {
        sors.push([document.getElementById("sor" + i).value, document.getElementById("sor" + (i + 1)).value]);
    }
    var soch1_new = document.getElementById("soch1-new").value;
    var soch2_new = document.getElementById("soch2-new").value;
    var output_text_new = document.getElementById("output-text-new");

    var r = calcQuarter({
        sum: sum, quan: quan, sors: sors,
        soch1: soch1_new, soch2: soch2_new,
        opIn: document.getElementById("op-in-new").value,
        sochIn: document.getElementById("soch-in-new").value
    });

    if (r.op !== null) document.getElementById("op-out-new").innerHTML = r.op.toFixed(1) + "%";
    if (r.soch !== null) document.getElementById("soch-out-new").innerHTML = r.soch.toFixed(1) + "%";
    document.getElementById("summa-out-new").innerHTML = r.total + "%";

    switch (r.branch) {
        case 1:
            enableSum();
            enableSoch();
            break;
        case 2:
            enableSum();
            disableSoch();
            break;
        case 3:
            disableSum();
            enableSoch();
            break;
        case 4:
            disableSum();
            disableSoch();
            break;
        case 5:
            enableSum();
            document.getElementById("soch-one").removeAttribute("hidden", "hidden");
            document.getElementById("soch-two").setAttribute("hidden", "hidden");
            break;
        case 6:
            enableSoch();
            break;
        case 7:
            disableSum();
            document.getElementById("soch1-new").disabled = false;
            document.getElementById("soch2-new").disabled = false;
            document.getElementById("soch-one").removeAttribute("hidden", "hidden");
            document.getElementById("soch-two").setAttribute("hidden", "hidden");
            break;
        case 8:
            disableSoch();
            document.getElementById("op-one").removeAttribute("hidden", "hidden");
            document.getElementById("op-two").setAttribute("hidden", "hidden");
            enableSumInputs();
            break;
        default:
            document.getElementById("op-one").removeAttribute("hidden", "hidden");
            document.getElementById("soch-one").removeAttribute("hidden", "hidden");
            document.getElementById("op-two").setAttribute("hidden", "hidden");
            document.getElementById("soch-two").setAttribute("hidden", "hidden");
            enableSumInputs();
            document.getElementById("soch1-new").disabled = false;
            document.getElementById("soch2-new").disabled = false;
    }

    var grade = gradeFromPercent(Number(r.total));
    var color = grade === "ERROR" ? RED : GRADE_COLOR[grade];
    output_text_new.innerHTML = grade === "ERROR" ? "Где-то ошибка ..." : "Оценка за четверть: " + grade;
    output_text_new.style.backgroundColor = color;
    setThemeColor(color);

    CheckIsEmpty();
    checkSors(Number(sors[0][0]), Number(sors[0][1]), "sor_1");
    checkSors(Number(sors[1][0]), Number(sors[1][1]), "sor_2");
    checkSors(Number(sors[2][0]), Number(sors[2][1]), "sor_3");
    checkSors(Number(sors[3][0]), Number(sors[3][1]), "sor_4");
    checkSors(Number(soch1_new), Number(soch2_new), "soch-new");
}
function enableSumInputs() {
    ["sum", "quan", "sor1", "sor2", "sor3", "sor4", "sor5", "sor6", "sor7", "sor8"].forEach(function (id) {
        document.getElementById(id).disabled = false;
    });
}
function checkSors(sor1,sor2,id) {
    var checked = ((sor1/sor2)*100).toFixed();
    if (checked < 0) { 
        document.getElementById(id).style.backgroundColor = "#ff6666";
    } else if (checked >= 0 && checked < 40) {
        document.getElementById(id).style.backgroundColor = "#ff6666";
    } else if (checked >= 40 && checked < 65) {
        document.getElementById(id).style.backgroundColor = "#f9a23b";
    } else if (checked >= 65 && checked < 85){
        document.getElementById(id).style.backgroundColor = "#c2d23a";
    } else if (checked >= 85 && checked <= 100) {
        document.getElementById(id).style.backgroundColor = "#c2d23a";
    } else if (checked == isFinite(checked) || checked == isNaN(checked)){
        document.getElementById(id).style.backgroundColor = "#c2d23a";
    }
}