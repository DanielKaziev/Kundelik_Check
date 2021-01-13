function Main() { 
    let sor1 = Number(document.getElementById("sor1").value);
    let sor2 = Number(document.getElementById("sor2").value);
    let sor3 = Number(document.getElementById("sor3").value);
    let sor4 = Number(document.getElementById("sor4").value);
    let sor5 = Number(document.getElementById("sor5").value);
    let sor6 = Number(document.getElementById("sor6").value);
    let sor7 = Number(document.getElementById("sor7").value);
    let sor8 = Number(document.getElementById("sor8").value);
    let soch1 = Number(document.getElementById("soch1").value);
    let soch2 = Number(document.getElementById("soch2").value);
    let sor_out = document.getElementById("sor-out");
    let soch_out = document.getElementById("soch-out");
    let output_text = document.getElementById("output-text");
    let summa_out = document.getElementById("summa-out");
    
    let prem1 = [sor1, sor3, sor5, sor7,];
    let prem2 = [sor2, sor4, sor6, sor8,]; 
    let prem1_checked = Number(prem1.reduce((a, b,) => a + b));
    let prem2_checked = Number(prem2.reduce((a, b,) => a + b));
    let result_sors = (prem1_checked / prem2_checked) * 50;
    sor_out.innerHTML = result_sors.toFixed(1) + "%";
    
    if (isNaN(result_sors) == true || isFinite(result_sors) == false){
        sor_out.innerHTML = "0.0%";
        result_sors = 0;
    } else {
        sor_out.innerHTML = result_sors.toFixed(1) + "%";
    }

    if (soch1 == "" && soch2 == "") {
        var result_soch = 0;
    } else {
        var result_soch = soch1 / soch2 * 50;
    }

    if (result_sors < 0 || result_soch < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (result_sors > 50 || result_soch > 50) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else {
        var result_sors_fix = Number(result_sors.toFixed(1));
        var result_soch_fix = Number(result_soch.toFixed(1));
        var result = Number((result_sors_fix + result_soch_fix).toFixed(1));
        var result_fix = result.toFixed();
        if (result_fix < 0) { 
            output_text.innerHTML = "Где-то ошибка ...";
            document.getElementById("output-text").style.backgroundColor = "#ff6666";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
        } else if (result_fix >= 0 && result_fix < 40) {
            output_text.innerHTML = "Оценка за четверть: 2";
            document.getElementById("output-text").style.backgroundColor = "#ff6666";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
        } else if (result_fix >= 40 && result_fix < 65) {
            output_text.innerHTML = "Оценка за четверть: 3";
            document.getElementById("output-text").style.backgroundColor = "#f9a23b";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#f9a23b");
        } else if (result_fix >= 65 && result_fix < 85){
            output_text.innerHTML = "Оценка за четверть: 4";
            document.getElementById("output-text").style.backgroundColor = "#c2d23a";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#c2d23a");
        } else if (result_fix >= 85 && result_fix <= 100) {
            output_text.innerHTML = "Оценка за четверть: 5";
            document.getElementById("output-text").style.backgroundColor = "#c2d23a";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#c2d23a");
        } else {
            if (result_fix < 0) { 
                output_text.innerHTML = "Где-то ошибка ...";
                document.getElementById("output-text").style.backgroundColor = "#ff6666";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#ff6666");
            } else if (result_fix >= 0 && result_fix < 40) {
                output_text.innerHTML = "Оценка за четверть: 2";
                document.getElementById("output-text").style.backgroundColor = "#ff6666";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#ff6666");
            } else if (result_fix >= 40 && result_fix < 65) {
                output_text.innerHTML = "Оценка за четверть: 3";
                document.getElementById("output-text").style.backgroundColor = "#f9a23b";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#f9a23b");
            } else if (result_fix >= 65 && result_fix < 85){
                output_text.innerHTML = "Оценка за четверть: 4";
                document.getElementById("output-text").style.backgroundColor = "#c2d23a";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#c2d23a");
            } else if (result_fix >= 85 && result_fix <= 100) {
                output_text.innerHTML = "Оценка за четверть: 5";
                document.getElementById("output-text").style.backgroundColor = "#c2d23a";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#c2d23a");
            } else {
                output_text.innerHTML = "Что-то пошло не так ...";
                document.getElementById("output-text").style.backgroundColor = "#ff6666";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#ff6666");
            }
        }
    }

    if (isNaN(result_soch) == true || isFinite(result_soch) == false){
        soch_out.innerHTML = "0.0%";
    } else {
        soch_out.innerHTML = result_soch.toFixed(1) + "%";
    }
    
    if (isNaN(result_fix) == true || isFinite(result_fix) == false){
        summa_out.innerHTML = "0.0%";
    } else {
        summa_out.innerHTML = result_fix + "%";
    }

    var sor1_result = sor1 / sor2 * 100;
    if (sor1_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor1_result >= 0 && sor1_result < 40) {
        document.getElementById("sor_1").style.backgroundColor = "#ff6666";
    } else if (sor1_result >= 40 && sor1_result < 65) {
        document.getElementById("sor_1").style.backgroundColor = "#f9a23b";
    } else if (sor1_result >= 65 && sor1_result < 85){
        document.getElementById("sor_1").style.backgroundColor = "#c2d23a";
    } else if (sor1_result >= 85 && sor1_result <= 100) {
        document.getElementById("sor_1").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var sor2_result = sor3 / sor4 * 100;
    if (sor2_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor2_result >= 0 && sor2_result < 40) {
        document.getElementById("sor_2").style.backgroundColor = "#ff6666";
    } else if (sor2_result >= 40 && sor2_result < 65) {
        document.getElementById("sor_2").style.backgroundColor = "#f9a23b";
    } else if (sor2_result >= 65 && sor2_result < 85){
        document.getElementById("sor_2").style.backgroundColor = "#c2d23a";
    } else if (sor2_result >= 85 && sor2_result <= 100) {
        document.getElementById("sor_2").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var sor3_result = sor5 / sor6 * 100;
    if (sor3_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor3_result >= 0 && sor3_result < 40) {
        document.getElementById("sor_3").style.backgroundColor = "#ff6666";
    } else if (sor3_result >= 40 && sor3_result < 65) {
        document.getElementById("sor_3").style.backgroundColor = "#f9a23b";
    } else if (sor3_result >= 65 && sor3_result < 85){
        document.getElementById("sor_3").style.backgroundColor = "#c2d23a";
    } else if (sor3_result >= 85 && sor3_result <= 100) {
        document.getElementById("sor_3").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var sor4_result = sor7 / sor8 * 100;
    if (sor4_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor4_result >= 0 && sor4_result < 40) {
        document.getElementById("sor_4").style.backgroundColor = "#ff6666";
    } else if (sor4_result >= 40 && sor4_result < 65) {
        document.getElementById("sor_4").style.backgroundColor = "#f9a23b";
    } else if (sor4_result >= 65 && sor4_result < 85){
        document.getElementById("sor_4").style.backgroundColor = "#c2d23a";
    } else if (sor4_result >= 85 && sor4_result <= 100) {
        document.getElementById("sor_4").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var soch_result = soch1 / soch2 * 100;
    if (soch_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (soch_result >= 0 && soch_result < 40) {
        document.getElementById("soch_1").style.backgroundColor = "#ff6666";
    } else if (soch_result >= 40 && soch_result < 65) {
        document.getElementById("soch_1").style.backgroundColor = "#f9a23b";
    } else if (soch_result >= 65 && soch_result < 85){
        document.getElementById("soch_1").style.backgroundColor = "#c2d23a";
    } else if (soch_result >= 85 && soch_result <= 100) {
        document.getElementById("soch_1").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    CheckIsEmpty();
}
function FirstGrade() {
    let sor1 = Number(document.getElementById("sor1").value);
    let sor2 = Number(document.getElementById("sor2").value);
    let sor3 = Number(document.getElementById("sor3").value);
    let sor4 = Number(document.getElementById("sor4").value);
    let sor5 = Number(document.getElementById("sor5").value);
    let sor6 = Number(document.getElementById("sor6").value);
    let sor7 = Number(document.getElementById("sor7").value);
    let sor8 = Number(document.getElementById("sor8").value);
    let soch1 = Number(document.getElementById("soch1").value);
    let soch2 = Number(document.getElementById("soch2").value);
    let sor_out = document.getElementById("sor-out");
    let soch_out = document.getElementById("soch-out");
    let output_text = document.getElementById("output-text");
    let summa_out = document.getElementById("summa-out");
    
    let prem1 = [sor1, sor3, sor5, sor7,];
    let prem2 = [sor2, sor4, sor6, sor8,]; 
    let prem1_checked = Number(prem1.reduce((a, b,) => a + b));
    let prem2_checked = Number(prem2.reduce((a, b,) => a + b));
    let result_sors = (prem1_checked / prem2_checked) * 50;
    sor_out.innerHTML = result_sors.toFixed(1) + "%";
    
    if (isNaN(result_sors) == true || isFinite(result_sors) == false){
        sor_out.innerHTML = "0.0%";
        result_sors = 0;
    } else {
        sor_out.innerHTML = result_sors.toFixed(1) + "%";
    }

    if (soch1 == "" && soch2 == "") {
        var result_soch = 0;
    } else {
        var result_soch = soch1 / soch2 * 50;
    }

    if (result_sors < 0 || result_soch < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (result_sors > 50 || result_soch > 50) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else {
        var result_sors_fix = Number(result_sors.toFixed(1));
        var result_soch_fix = Number(result_soch.toFixed(1));
        var result = Number((result_sors_fix + result_soch_fix).toFixed(1));
        var result_fix = result.toFixed();
        if (result_fix < 0) { 
            output_text.innerHTML = "Где-то ошибка ...";
            document.getElementById("output-text").style.backgroundColor = "#ff6666";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
        } else if (result_fix >= 0 && result_fix < 21) {
            output_text.innerHTML = "Оценка за четверть: 2";
            document.getElementById("output-text").style.backgroundColor = "#ff6666";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
        } else if (result_fix >=21  && result_fix < 51) {
            output_text.innerHTML = "Оценка за четверть: 3";
            document.getElementById("output-text").style.backgroundColor = "#f9a23b";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#f9a23b");
        } else if (result_fix >= 51 && result_fix < 81){
            output_text.innerHTML = "Оценка за четверть: 4";
            document.getElementById("output-text").style.backgroundColor = "#c2d23a";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#c2d23a");
        } else if (result_fix >= 81 && result_fix <= 100) {
            output_text.innerHTML = "Оценка за четверть: 5";
            document.getElementById("output-text").style.backgroundColor = "#c2d23a";
            var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#c2d23a");
        } else {
            if (result_fix < 0) { 
                output_text.innerHTML = "Где-то ошибка ...";
                document.getElementById("output-text").style.backgroundColor = "#ff6666";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#ff6666");
            } else if (result_fix >= 0 && result_fix < 21) {
                output_text.innerHTML = "Оценка за четверть: 2";
                document.getElementById("output-text").style.backgroundColor = "#ff6666";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#ff6666");
            } else if (result_fix >= 21 && result_fix < 51) {
                output_text.innerHTML = "Оценка за четверть: 3";
                document.getElementById("output-text").style.backgroundColor = "#f9a23b";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#f9a23b");
            } else if (result_fix >= 51 && result_fix < 81){
                output_text.innerHTML = "Оценка за четверть: 4";
                document.getElementById("output-text").style.backgroundColor = "#c2d23a";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#c2d23a");
            } else if (result_fix >= 81 && result_fix <= 100) {
                output_text.innerHTML = "Оценка за четверть: 5";
                document.getElementById("output-text").style.backgroundColor = "#c2d23a";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#c2d23a");
            } else {
                output_text.innerHTML = "Что-то пошло не так ...";
                document.getElementById("output-text").style.backgroundColor = "#ff6666";
                var metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
                metaThemeColorAndroid.setAttribute("content", "#ff6666");
            }
        }
    }

    if (isNaN(result_soch) == true || isFinite(result_soch) == false){
        soch_out.innerHTML = "0.0%";
    } else {
        soch_out.innerHTML = result_soch.toFixed(1) + "%";
    }
    
    if (isNaN(result_fix) == true || isFinite(result_fix) == false){
        summa_out.innerHTML = "0.0%";
    } else {
        summa_out.innerHTML = result_fix + "%";
    }

    var sor1_result = sor1 / sor2 * 100;
    if (sor1_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor1_result >= 0 && sor1_result < 21) {
        document.getElementById("sor_1").style.backgroundColor = "#ff6666";
    } else if (sor1_result >= 21 && sor1_result < 51) {
        document.getElementById("sor_1").style.backgroundColor = "#f9a23b";
    } else if (sor1_result >= 51 && sor1_result < 81){
        document.getElementById("sor_1").style.backgroundColor = "#c2d23a";
    } else if (sor1_result >= 81 && sor1_result <= 100) {
        document.getElementById("sor_1").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var sor2_result = sor3 / sor4 * 100;
    if (sor2_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor2_result >= 0 && sor2_result < 21) {
        document.getElementById("sor_2").style.backgroundColor = "#ff6666";
    } else if (sor2_result >= 21 && sor2_result < 51) {
        document.getElementById("sor_2").style.backgroundColor = "#f9a23b";
    } else if (sor2_result >= 51 && sor2_result < 81){
        document.getElementById("sor_2").style.backgroundColor = "#c2d23a";
    } else if (sor2_result >= 81 && sor2_result <= 100) {
        document.getElementById("sor_2").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var sor3_result = sor5 / sor6 * 100;
    if (sor3_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor3_result >= 0 && sor3_result < 21) {
        document.getElementById("sor_3").style.backgroundColor = "#ff6666";
    } else if (sor3_result >= 21 && sor3_result < 51) {
        document.getElementById("sor_3").style.backgroundColor = "#f9a23b";
    } else if (sor3_result >= 51 && sor3_result < 81){
        document.getElementById("sor_3").style.backgroundColor = "#c2d23a";
    } else if (sor3_result >= 81 && sor3_result <= 100) {
        document.getElementById("sor_3").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var sor4_result = sor7 / sor8 * 100;
    if (sor4_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (sor4_result >= 0 && sor4_result < 21) {
        document.getElementById("sor_4").style.backgroundColor = "#ff6666";
    } else if (sor4_result >= 21 && sor4_result < 51) {
        document.getElementById("sor_4").style.backgroundColor = "#f9a23b";
    } else if (sor4_result >= 51 && sor4_result < 81){
        document.getElementById("sor_4").style.backgroundColor = "#c2d23a";
    } else if (sor4_result >= 81 && sor4_result <= 100) {
        document.getElementById("sor_4").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    var soch_result = soch1 / soch2 * 100;
    if (soch_result < 0) {
        output_text.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text").style.backgroundColor = "#ff6666";
    } else if (soch_result >= 0 && soch_result < 21) {
        document.getElementById("soch_1").style.backgroundColor = "#ff6666";
    } else if (soch_result >= 21 && soch_result < 51) {
        document.getElementById("soch_1").style.backgroundColor = "#f9a23b";
    } else if (soch_result >= 51 && soch_result < 81){
        document.getElementById("soch_1").style.backgroundColor = "#c2d23a";
    } else if (soch_result >= 81 && soch_result <= 100) {
        document.getElementById("soch_1").style.backgroundColor = "#c2d23a";
    } else {
        
    }
    CheckIsEmpty();
}
function CheckIsEmpty() {
    let sor1 = document.getElementById("sor1").value
    let sor2 = document.getElementById("sor2").value
    let sor3 = document.getElementById("sor3").value
    let sor4 = document.getElementById("sor4").value
    let sor5 = document.getElementById("sor5").value
    let sor6 = document.getElementById("sor6").value
    let sor7 = document.getElementById("sor7").value
    let sor8 = document.getElementById("sor8").value
    let soch1 = document.getElementById("soch1").value
    let soch2 = document.getElementById("soch2").value
    if (sor1 == "" && sor2 == "" && sor3 == "" && sor4 == "" && sor5 == "" && sor6 == "" && sor7 == "" && sor8 == "" && soch1 == "" && soch2 == "" ) {
        let output_text = document.getElementById("output-text");
        output_text.innerHTML = "";
        output_text.removeAttribute('style');
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
    if (soch1 == "" && soch2 == "") {
        document.getElementById("soch_1").style.backgroundColor = "#c2d23a";
    }

    let sum = document.getElementById("sum").value;
    let quan = document.getElementById("quan").value;
    let sor1_new = document.getElementById("sor1-new").value;
    let sor2_new = document.getElementById("sor2-new").value;
    let soch1_new = document.getElementById("soch1-new").value;
    let soch2_new = document.getElementById("soch2-new").value;
    let op_in_new = document.getElementById("op-in-new").value;
    let soch_in_new = document.getElementById("soch-in-new").value;
    if (sum == "" && quan == "" && sor1_new == "" && sor2_new == "" && soch1_new == "" && soch2_new == "" && op_in_new == "" && soch_in_new == "") {
        let output_text_new = document.getElementById("output-text-new");
        output_text_new.innerHTML = "";
        output_text_new.removeAttribute('style');
    }
    if (sor1_new == "" && sor2_new == "") {
        document.getElementById("sor-new").style.backgroundColor = "#c2d23a";
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

function CallFirstGrade() {  
    if (document.getElementById("first-grade").checked == true) {
        document.getElementById("sor1").setAttribute("onchange", "FirstGrade()");
        document.getElementById("sor2").setAttribute("onchange", "FirstGrade()");
        document.getElementById("sor3").setAttribute("onchange", "FirstGrade()");
        document.getElementById("sor4").setAttribute("onchange", "FirstGrade()");
        document.getElementById("sor5").setAttribute("onchange", "FirstGrade()");
        document.getElementById("sor6").setAttribute("onchange", "FirstGrade()");
        document.getElementById("sor7").setAttribute("onchange", "FirstGrade()");
        document.getElementById("sor8").setAttribute("onchange", "FirstGrade()");
        document.getElementById("soch1").setAttribute("onchange", "FirstGrade()");
        document.getElementById("soch2").setAttribute("onchange", "FirstGrade()");
        FirstGrade();
        FOPlan();
        CheckFirstGrade();
        CheckIsEmpty();
        OneSO();
    } else {
        document.getElementById("sor1").setAttribute("onchange", "Main()");
        document.getElementById("sor2").setAttribute("onchange", "Main()");
        document.getElementById("sor3").setAttribute("onchange", "Main()");
        document.getElementById("sor4").setAttribute("onchange", "Main()");
        document.getElementById("sor5").setAttribute("onchange", "Main()");
        document.getElementById("sor6").setAttribute("onchange", "Main()");
        document.getElementById("sor7").setAttribute("onchange", "Main()");
        document.getElementById("sor8").setAttribute("onchange", "Main()");
        document.getElementById("soch1").setAttribute("onchange", "Main()");
        document.getElementById("soch2").setAttribute("onchange", "Main()");
        Main();
        FOPlan();
        CheckFirstGrade();
        CheckIsEmpty();
        OneSO();
    }
}

function CallOneSO() {  
    if (document.getElementById("sor/soch").checked == true) {
        document.getElementById("old-grade").checked = false;
        document.getElementById("fo-pln").checked = false;
        document.getElementById("so-container").removeAttribute("hidden", "hidden");
        document.getElementById("main-container").setAttribute("hidden", "hidden");
        document.getElementById("new-container").setAttribute("hidden", "hidden");
        document.getElementById("fo-container").setAttribute("hidden", "hidden");
        OneSO();
    } else {
        document.getElementById("so-container").setAttribute("hidden", "hidden");
        document.getElementById("main-container").setAttribute("hidden", "hidden");
        document.getElementById("fo-container").setAttribute("hidden", "hidden");
        document.getElementById("new-container").removeAttribute("hidden", "hidden");
        document.getElementById("output-so").removeAttribute("hidden", "hidden");
    }
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
    
    if (document.getElementById("first-grade").checked == true) {
        if (result_so < 0) {
            output_pre.innerHTML = "ERROR";
            output_pre_otv.innerHTML = "ERROR";
            output_pre.style.backgroundColor = "#ff6666";
            output_pre_otv.style.backgroundColor = "#ff6666";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
            document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
        } else if (result_so >= 0 && result_so < 21) {
            output_pre.style.backgroundColor = "#ff6666";
            output_pre_otv.style.backgroundColor = "#ff6666";
            so_main.style.backgroundColor = "#ff6666";
            output_pre_otv.innerHTML = "ПЛХ(2)";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
            document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
        } else if (result_so >= 21 && result_so < 51) {
            output_pre.style.backgroundColor = "#f9a23b";
            output_pre_otv.style.backgroundColor = "#f9a23b";
            so_main.style.backgroundColor = "#f9a23b";
            output_pre_otv.innerHTML = "УДВ(3)";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#f9a23b");
            document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
        } else if (result_so >= 51 && result_so < 81){
            output_pre.style.backgroundColor = "#c2d23a";
            output_pre_otv.style.backgroundColor = "#c2d23a";
            so_main.style.backgroundColor = "#c2d23a";
            output_pre_otv.innerHTML = "ХОР(4)";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#c2d23a");
            document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
        } else if (result_so >= 81 && result_so <= 100) {
            output_pre.style.backgroundColor = "#c2d23a";
            output_pre_otv.style.backgroundColor = "#c2d23a";
            so_main.style.backgroundColor = "#c2d23a";
            output_pre_otv.innerHTML = "ОТЛ(5)";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#c2d23a");
            document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
        } else if (result_so > 100){
            output_pre.innerHTML = "ERROR";
            output_pre_otv.innerHTML = "ERROR";
            output_pre.style.backgroundColor = "#ff6666";
            output_pre_otv.style.backgroundColor = "#ff6666";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
            document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
        } else {}
    } else {
        if (result_so < 0) {
            output_pre.innerHTML = "ERROR";
            output_pre_otv.innerHTML = "ERROR";
            output_pre.style.backgroundColor = "#ff6666";
            output_pre_otv.style.backgroundColor = "#ff6666";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
            document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
        } else if (result_so >= 0 && result_so < 40) {
            output_pre.style.backgroundColor = "#ff6666";
            output_pre_otv.style.backgroundColor = "#ff6666";
            so_main.style.backgroundColor = "#ff6666";
            output_pre_otv.innerHTML = "ПЛХ(2)";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
            document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
        } else if (result_so >= 40 && result_so < 65) {
            output_pre.style.backgroundColor = "#f9a23b";
            output_pre_otv.style.backgroundColor = "#f9a23b";
            so_main.style.backgroundColor = "#f9a23b";
            output_pre_otv.innerHTML = "УДВ(3)";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#f9a23b");
            document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
        } else if (result_so >= 65 && result_so < 85){
            output_pre.style.backgroundColor = "#c2d23a";
            output_pre_otv.style.backgroundColor = "#c2d23a";
            so_main.style.backgroundColor = "#c2d23a";
            output_pre_otv.innerHTML = "ХОР(4)";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#c2d23a");
            document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
        } else if (result_so >= 85 && result_so <= 100) {
            output_pre.style.backgroundColor = "#c2d23a";
            output_pre_otv.style.backgroundColor = "#c2d23a";
            so_main.style.backgroundColor = "#c2d23a";
            output_pre_otv.innerHTML = "ОТЛ(5)";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#c2d23a");
            document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
        } else if (result_so > 100){
            output_pre.innerHTML = "ERROR";
            output_pre_otv.innerHTML = "ERROR";
            output_pre.style.backgroundColor = "#ff6666";
            output_pre_otv.style.backgroundColor = "#ff6666";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
            document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
        } else {}
    }
    CheckIsEmpty();
}

function CallOldGrade() {
    if (document.getElementById("old-grade").checked == true) {
        document.getElementById("sor/soch").checked = false;
        document.getElementById("fo-pln").checked = false;
        document.getElementById("so-container").setAttribute("hidden", "hidden");
        document.getElementById("new-container").setAttribute("hidden", "hidden");
        document.getElementById("fo-container").setAttribute("hidden", "hidden");
        document.getElementById("main-container").removeAttribute("hidden", "hidden");
    } else {
        document.getElementById("so-container").setAttribute("hidden", "hidden");
        document.getElementById("main-container").setAttribute("hidden", "hidden");
        document.getElementById("fo-container").setAttribute("hidden", "hidden");
        document.getElementById("new-container").removeAttribute("hidden", "hidden");
    }
}

function OneFO() {
    var fo = Number(document.getElementById("fo1").value);
    var output_fo = document.getElementById("output-fo");
    var output_fo_one = document.getElementById("output-fo-one");
    var output_fo_three = document.getElementById("output-fo-three");

    var num1 = "Выполнил до 10 % учебных заданий, допущены ошибки, на уроке пассивный, не делает выводы по итогам обратной связи с учителем, не проявляет самостоятельность при выполнении заданий, не знает пройденный материал";
    var num2 = "Выполнил до 20 % учебных заданий, допущены ошибки, на уроке пассивный, не всегда делает соответствующие выводы по итогам обратной связи с учителем, не проявляет самостоятельность при выполнении заданий";
    var num3 = "Выполнил до 30 % учебных заданий, допущены ошибки, стремится исправить свои ошибки, на уроке иногда проявляет активность, нуждается в поддержке учителя/родителей/сверстников при выполнений учебных заданий";
    var num4 = "Выполнил до 40 % учебных заданий, допустил ошибки, нуждается в помощи при исправлении ошибок, не всегда проявляет активность, иногда  проявляет самостоятельность при выполнении заданий";
    var num5 = "Выполнил до 50 % учебных заданий, допустил до 5-ти ошибок, нуждается в помощи учителя, на уроке не всегда активный, иногда проявляет самостоятельность при выполнении посильных заданий";
    var num6 = "Выполнил до 60 % учебных заданий, допустил до 4-х ошибок, нуждается в помощи учителя, на уроке проявляет старательность, самостоятельно может выполнить задания средней сложности";
    var num7 = "Выполнил до 70 % учебных заданий, допустил до 3-х ошибок, своевременно устранил ошибки, на уроке активный, проявляет самостоятельность при выполнении заданий";
    var num8 = "Выполнил до 80 % учебных заданий, допустил 1-2 незначительных ошибок, на основе комментариев учителя самостоятельно исправляет свои ошибки, активный, самостоятельный";
    var num9 = "Выполнил до 90 % учебных заданий, допустил незначительные неточности при выполнении  заданий, работает над ошибками, активный, самостоятельный";
    var num10 = "Выполнил 100 % учебных заданий, не допустил ошибок, активный, самостоятельный, может объяснить, обосновать свои ответы";

    if (fo == 0) {
        document.getElementById("fo-main").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-one").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 2 (ПЛХ)"
        output_fo.innerHTML = num1;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#ff6666");
        output_fo_three.innerHTML = "Уровень знаний: низкий";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#ff6666";
    } else if (fo == 1) {
        document.getElementById("fo-main").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-one").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 2 (ПЛХ)"
        output_fo.innerHTML = num1;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#ff6666");
        output_fo_three.innerHTML = "Уровень знаний: низкий";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#ff6666";
    } else if (fo == 2) {
        document.getElementById("fo-main").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-one").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 2 (ПЛХ)"
        output_fo.innerHTML = num2;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#ff6666");
        output_fo_three.innerHTML = "Уровень знаний: низкий";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#ff6666";
    } else if (fo == 3){
        document.getElementById("fo-main").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-one").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 2 (ПЛХ)"
        output_fo.innerHTML = num3;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#ff6666");
        output_fo_three.innerHTML = "Уровень знаний: низкий";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#ff6666";
    } else if (fo == 4) {
        document.getElementById("fo-main").style.backgroundColor = "#f9a23b";
        document.getElementById("output-fo-one").style.backgroundColor = "#f9a23b";
        document.getElementById("output-fo-two").style.backgroundColor = "#f9a23b";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 3 (УДВ)"
        output_fo.innerHTML = num4;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#f9a23b");
        output_fo_three.innerHTML = "Уровень знаний: средний";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#f9a23b";
    } else if (fo == 5) {
        document.getElementById("fo-main").style.backgroundColor = "#f9a23b";
        document.getElementById("output-fo-one").style.backgroundColor = "#f9a23b";
        document.getElementById("output-fo-two").style.backgroundColor = "#f9a23b";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 3 (УДВ)"
        output_fo.innerHTML = num5;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#f9a23b");
        output_fo_three.innerHTML = "Уровень знаний: средний";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#f9a23b";
    } else if (fo == 6) {
        document.getElementById("fo-main").style.backgroundColor = "#f9a23b";
        document.getElementById("output-fo-one").style.backgroundColor = "#f9a23b";
        document.getElementById("output-fo-two").style.backgroundColor = "#f9a23b";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 3 (УДВ)"
        output_fo.innerHTML = num6;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#f9a23b");
        output_fo_three.innerHTML = "Уровень знаний: средний";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#f9a23b";
    } else if (fo == 7) {
        document.getElementById("fo-main").style.backgroundColor = "#c2d23a";
        document.getElementById("output-fo-one").style.backgroundColor = "#c2d23a";
        document.getElementById("output-fo-two").style.backgroundColor = "#c2d23a";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 4 (ХОР)"
        output_fo.innerHTML = num7;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#c2d23a");
        output_fo_three.innerHTML = "Уровень знаний: средний";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#f9a23b";
    } else if (fo == 8) {
        document.getElementById("fo-main").style.backgroundColor = "#c2d23a";
        document.getElementById("output-fo-one").style.backgroundColor = "#c2d23a";
        document.getElementById("output-fo-two").style.backgroundColor = "#c2d23a";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 4 (ХОР)"
        output_fo.innerHTML = num8;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#c2d23a");
        output_fo_three.innerHTML = "Уровень знаний: высокий";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#c2d23a";
    } else if (fo == 9) {
        document.getElementById("fo-main").style.backgroundColor = "#c2d23a";
        document.getElementById("output-fo-one").style.backgroundColor = "#c2d23a";
        document.getElementById("output-fo-two").style.backgroundColor = "#c2d23a";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 5 (ОТЛ)"
        output_fo.innerHTML = num9;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#c2d23a");
        output_fo_three.innerHTML = "Уровень знаний: высокий";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#c2d23a";
    } else if (fo == 10) {
        document.getElementById("fo-main").style.backgroundColor = "#c2d23a";
        document.getElementById("output-fo-one").style.backgroundColor = "#c2d23a";
        document.getElementById("output-fo-two").style.backgroundColor = "#c2d23a";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 5 (ОТЛ)"
        output_fo.innerHTML = num10;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#c2d23a");
        output_fo_three.innerHTML = "Уровень знаний: высокий";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#c2d23a";
    } else {
        document.getElementById("fo-main").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-one").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "ERROR"
        output_fo.innerHTML = "Упс, у вас ошибка.";
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#ff6666");
        output_fo_three.innerHTML = "ERROR";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#ff6666";
    }
    CheckIsEmpty();
}

function CallOneFO() {
    if (document.getElementById("fo-pln").checked == true) {
        document.getElementById("sor/soch").checked = false;
        document.getElementById("old-grade").checked = false;
        document.getElementById("so-container").setAttribute("hidden", "hidden");
        document.getElementById("new-container").setAttribute("hidden", "hidden");
        document.getElementById("main-container").setAttribute("hidden", "hidden");
        document.getElementById("fo-container").removeAttribute("hidden", "hidden");
    } else {
        document.getElementById("so-container").setAttribute("hidden", "hidden");
        document.getElementById("main-container").setAttribute("hidden", "hidden");
        document.getElementById("fo-container").setAttribute("hidden", "hidden");
        document.getElementById("new-container").removeAttribute("hidden", "hidden");
    }
}

function CheckFirstGrade() {  
    var sor1_new = Number(document.getElementById("sor1-new").value);
    var sor2_new = Number(document.getElementById("sor2-new").value);
    var soch1_new = Number(document.getElementById("soch1-new").value);
    var soch2_new = Number(document.getElementById("soch2-new").value);
    var check_sor = sor1_new / sor2_new * 100
    var check_soch = soch1_new / soch2_new * 100

    if (document.getElementById("first-grade").checked == true) {
        if (check_sor < 0) {
            output_text_new.innerHTML = "Где-то ошибка ...";
            document.getElementById("output-text-new").style.backgroundColor = "#ff6666";
        } else if (check_sor >= 0 && check_sor < 21) {
            document.getElementById("sor-new").style.backgroundColor = "#ff6666";
        } else if (check_sor >= 21 && check_sor < 51) {
            document.getElementById("sor-new").style.backgroundColor = "#f9a23b";
        } else if (check_sor >= 51 && check_sor < 81){
            document.getElementById("sor-new").style.backgroundColor = "#c2d23a";
        } else if (check_sor >= 81 && check_sor <= 100) {
            document.getElementById("sor-new").style.backgroundColor = "#c2d23a";
        } else {}
        
        if (check_soch < 0) {
            output_text_new.innerHTML = "Где-то ошибка ...";
            document.getElementById("output-text-new").style.backgroundColor = "#ff6666";
        } else if (check_soch >= 0 && check_soch < 21) {
            document.getElementById("soch-new").style.backgroundColor = "#ff6666";
        } else if (check_soch >= 21 && check_soch < 51) {
            document.getElementById("soch-new").style.backgroundColor = "#f9a23b";
        } else if (check_soch >= 51 && check_soch < 81){
            document.getElementById("soch-new").style.backgroundColor = "#c2d23a";
        } else if (check_soch >= 81 && check_soch <= 100) {
            document.getElementById("soch-new").style.backgroundColor = "#c2d23a";
        } else {}
    } else {
        if (check_sor < 0) {
            output_text_new.innerHTML = "Где-то ошибка ...";
            document.getElementById("output-text-new").style.backgroundColor = "#ff6666";
        } else if (check_sor >= 0 && check_sor < 40) {
            document.getElementById("sor-new").style.backgroundColor = "#ff6666";
        } else if (check_sor >= 40 && check_sor < 65) {
            document.getElementById("sor-new").style.backgroundColor = "#f9a23b";
        } else if (check_sor >= 65 && check_sor < 85){
            document.getElementById("sor-new").style.backgroundColor = "#c2d23a";
        } else if (check_sor >= 85 && check_sor <= 100) {
            document.getElementById("sor-new").style.backgroundColor = "#c2d23a";
        } else {}

        if (check_soch < 0) {
            output_text_new.innerHTML = "Где-то ошибка ...";
            document.getElementById("output-text-new").style.backgroundColor = "#ff6666";
        } else if (check_soch >= 0 && check_soch < 40) {
            document.getElementById("soch-new").style.backgroundColor = "#ff6666";
        } else if (check_soch >= 40 && check_soch < 65) {
            document.getElementById("soch-new").style.backgroundColor = "#f9a23b";
        } else if (check_soch >= 65 && check_soch < 85){
            document.getElementById("soch-new").style.backgroundColor = "#c2d23a";
        } else if (check_soch >= 85 && check_soch <= 100) {
            document.getElementById("soch-new").style.backgroundColor = "#c2d23a";
        } else {}
    }
}

function FOPlan() {
    var sum = Number(document.getElementById("sum").value);
    var quan = Number(document.getElementById("quan").value);
    var sor1_new = Number(document.getElementById("sor1-new").value);
    var sor2_new = Number(document.getElementById("sor2-new").value);
    var soch1_new = Number(document.getElementById("soch1-new").value);
    var soch2_new = Number(document.getElementById("soch2-new").value);
    var op_in_new = Number(document.getElementById("op-in-new").value);
    var soch_in_new = Number(document.getElementById("soch-in-new").value);
    var op_out_new = document.getElementById("op-out-new");
    var soch_out_new = document.getElementById("soch-out-new");
    var summa_out_new = document.getElementById("summa-out-new");
    var output_text_new = document.getElementById("output-text-new");
    var sum_op = sum + quan + sor1_new + sor2_new;
    var sum_soch = soch1_new + soch2_new;
    
    CheckFirstGrade();

    if (sum_op > 0 && sum_soch > 0) {
        document.getElementById("op-two").removeAttribute("hidden", "hidden");
        document.getElementById("op-one").setAttribute("hidden", "hidden");
        document.getElementById("soch-two").removeAttribute("hidden", "hidden");
        document.getElementById("soch-one").setAttribute("hidden", "hidden");
        document.getElementById("sum").disabled = false;
        document.getElementById("quan").disabled = false;
        document.getElementById("sor1-new").disabled = false;
        document.getElementById("sor2-new").disabled = false;
        document.getElementById("soch1-new").disabled = false;
        document.getElementById("soch2-new").disabled = false;

        var quan_resilt = quan * 10;
        var op_result = ((sor1_new + sum) / (sor2_new + quan_resilt)) * 50;

        if (isNaN(op_result) == true || isFinite(op_result) == false){
            op_out_new.innerHTML = "0.0%";
            op_result = 0;
        } else {
            op_out_new.innerHTML = op_result.toFixed(1) + "%";
        }

        var result_soch_new = (soch1_new / soch2_new) * 50
        if (isNaN(result_soch_new) == true || isFinite(result_soch_new) == false){
            soch_out_new.innerHTML = "0.0%";
            result_soch_new = 0;
        } else {
            soch_out_new.innerHTML = result_soch_new.toFixed(1) + "%";
        }
        
        let op_result_fix = Number(op_result.toFixed(1));
        let result_soch_fix_new = Number(result_soch_new.toFixed(1));
        let result_new = Number((op_result_fix + result_soch_fix_new).toFixed(1));
        var result_fix_new = result_new.toFixed();
        summa_out_new.innerHTML = result_fix_new + "%";

    } else if (sum_op > 0 && soch_in_new > 0) {
        document.getElementById("op-two").removeAttribute("hidden", "hidden");
        document.getElementById("op-one").setAttribute("hidden", "hidden");
        document.getElementById("soch-one").removeAttribute("hidden", "hidden");
        document.getElementById("soch-two").setAttribute("hidden", "hidden");
        document.getElementById("sum").disabled = false;
        document.getElementById("quan").disabled = false;
        document.getElementById("sor1-new").disabled = false;
        document.getElementById("sor2-new").disabled = false;
        document.getElementById("soch1-new").disabled = true;
        document.getElementById("soch2-new").disabled = true;

        var quan_resilt = quan * 10;
        var op_result = ((sor1_new + sum) / (sor2_new + quan_resilt)) * 50;

        if (isNaN(op_result) == true || isFinite(op_result) == false){
            op_out_new.innerHTML = "0.0%";
            op_result = 0;
        } else {
            op_out_new.innerHTML = op_result.toFixed(1) + "%";
        }

        let op_result_fix = Number(op_result.toFixed(1));
        let result_new = Number((op_result_fix + soch_in_new).toFixed(1));
        var result_fix_new = result_new.toFixed();
        summa_out_new.innerHTML = result_fix_new + "%";

    } else if (op_in_new > 0 && sum_soch > 0) {
        document.getElementById("op-one").removeAttribute("hidden", "hidden");
        document.getElementById("op-two").setAttribute("hidden", "hidden");
        document.getElementById("soch-two").removeAttribute("hidden", "hidden");
        document.getElementById("soch-one").setAttribute("hidden", "hidden");
        document.getElementById("sum").disabled = true;
        document.getElementById("quan").disabled = true;
        document.getElementById("sor1-new").disabled = true;
        document.getElementById("sor2-new").disabled = true;
        document.getElementById("soch1-new").disabled = false;
        document.getElementById("soch2-new").disabled = false;

        var result_soch_new = (soch1_new / soch2_new) * 50
        if (isNaN(result_soch_new) == true || isFinite(result_soch_new) == false){
            soch_out_new.innerHTML = "0.0%";
            result_soch_new = 0;
        } else {
            soch_out_new.innerHTML = result_soch_new.toFixed(1) + "%";
        }
        
        let result_soch_fix_new = Number(result_soch_new.toFixed(1));
        let result_new = Number((op_in_new + result_soch_fix_new).toFixed(1));
        var result_fix_new = result_new.toFixed();
        summa_out_new.innerHTML = result_fix_new + "%";

    } else if (op_in_new > 0 && soch_in_new > 0) {
        document.getElementById("op-one").removeAttribute("hidden", "hidden");
        document.getElementById("op-two").setAttribute("hidden", "hidden");
        document.getElementById("soch-one").removeAttribute("hidden", "hidden");
        document.getElementById("soch-two").setAttribute("hidden", "hidden");
        document.getElementById("sum").disabled = true;
        document.getElementById("quan").disabled = true;
        document.getElementById("sor1-new").disabled = true;
        document.getElementById("sor2-new").disabled = true;
        document.getElementById("soch1-new").disabled = true;
        document.getElementById("soch2-new").disabled = true;

        let result_new = Number((op_in_new + soch_in_new).toFixed(1));
        var result_fix_new = result_new.toFixed();
        summa_out_new.innerHTML = result_fix_new + "%";

    } else if (document.getElementById("sum").value.length > 0 || document.getElementById("quan").value.length > 0 || document.getElementById("sor1-new").value.length > 0 || document.getElementById("sor2-new").value.length > 0) {
        document.getElementById("op-two").removeAttribute("hidden", "hidden");
        document.getElementById("op-one").setAttribute("hidden", "hidden");
        document.getElementById("soch-one").removeAttribute("hidden", "hidden");
        document.getElementById("soch-two").setAttribute("hidden", "hidden");
        document.getElementById("sum").disabled = false;
        document.getElementById("quan").disabled = false;
        document.getElementById("sor1-new").disabled = false;
        document.getElementById("sor2-new").disabled = false;
        document.getElementById("soch1-new").disabled = false;
        document.getElementById("soch2-new").disabled = false;

        var quan_resilt = quan * 10;
        var op_result = ((sor1_new + sum) / (sor2_new + quan_resilt)) * 50;

        if (isNaN(op_result) == true || isFinite(op_result) == false){
            op_out_new.innerHTML = "0.0%";
            op_result = 0;
        } else {
            op_out_new.innerHTML = op_result.toFixed(1) + "%";
        }

        var op_result_fix = Number(op_result.toFixed(1));
        var result_fix_new = op_result_fix.toFixed();
        summa_out_new.innerHTML = result_fix_new + "%";

    } else if (document.getElementById("soch1-new").value.length > 0 || document.getElementById("soch2-new").value.length > 0) {
        document.getElementById("op-one").removeAttribute("hidden", "hidden");
        document.getElementById("op-two").setAttribute("hidden", "hidden");
        document.getElementById("soch-two").removeAttribute("hidden", "hidden");
        document.getElementById("soch-one").setAttribute("hidden", "hidden");
        document.getElementById("sum").disabled = false;
        document.getElementById("quan").disabled = false;
        document.getElementById("sor1-new").disabled = false;
        document.getElementById("sor2-new").disabled = false;
        document.getElementById("soch1-new").disabled = false;
        document.getElementById("soch2-new").disabled = false;

        var result_soch_new = (soch1_new / soch2_new) * 50
        if (isNaN(result_soch_new) == true || isFinite(result_soch_new) == false){
            soch_out_new.innerHTML = "0.0%";
            result_soch_new = 0;
        } else {
            soch_out_new.innerHTML = result_soch_new.toFixed(1) + "%";
        }
        
        let result_soch_fix_new = Number(result_soch_new.toFixed(1));
        let result_new = Number((result_soch_fix_new).toFixed(1));
        var result_fix_new = result_new.toFixed();
        summa_out_new.innerHTML = result_fix_new + "%";

    } else if (op_in_new > 0) {
        document.getElementById("op-one").removeAttribute("hidden", "hidden");
        document.getElementById("op-two").setAttribute("hidden", "hidden");
        document.getElementById("soch-one").removeAttribute("hidden", "hidden");
        document.getElementById("soch-two").setAttribute("hidden", "hidden");
        document.getElementById("sum").disabled = true;
        document.getElementById("quan").disabled = true;
        document.getElementById("sor1-new").disabled = true;
        document.getElementById("sor2-new").disabled = true;
        document.getElementById("soch1-new").disabled = false;
        document.getElementById("soch2-new").disabled = false;

        var result_fix_new = Number(op_in_new);
        summa_out_new.innerHTML = result_fix_new.toFixed() + "%";

    } else if (soch_in_new > 0) {
        document.getElementById("op-one").removeAttribute("hidden", "hidden");
        document.getElementById("op-two").setAttribute("hidden", "hidden");
        document.getElementById("soch-one").removeAttribute("hidden", "hidden");
        document.getElementById("soch-two").setAttribute("hidden", "hidden");
        document.getElementById("sum").disabled = false;
        document.getElementById("quan").disabled = false;
        document.getElementById("sor1-new").disabled = false;
        document.getElementById("sor2-new").disabled = false;
        document.getElementById("soch1-new").disabled = true;
        document.getElementById("soch2-new").disabled = true;

        var result_fix_new = Number(soch_in_new);
        summa_out_new.innerHTML = result_fix_new.toFixed() + "%";

    } else {
        document.getElementById("op-one").removeAttribute("hidden", "hidden");
        document.getElementById("soch-one").removeAttribute("hidden", "hidden");
        document.getElementById("op-two").setAttribute("hidden", "hidden");
        document.getElementById("soch-two").setAttribute("hidden", "hidden");
        document.getElementById("sum").disabled = false;
        document.getElementById("quan").disabled = false;
        document.getElementById("sor1-new").disabled = false;
        document.getElementById("sor2-new").disabled = false;
        document.getElementById("soch1-new").disabled = false;
        document.getElementById("soch2-new").disabled = false;

        var result_fix_new = 0;
        summa_out_new.innerHTML = result_fix_new.toFixed() + "%";
    }

    if (document.getElementById("first-grade").checked == true) {
        if (result_fix_new < 0) { 
            output_text_new.innerHTML = "Где-то ошибка ...";
            document.getElementById("output-text-new").style.backgroundColor = "#ff6666";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
        } else if (result_fix_new >= 0 && result_fix_new < 21) {
            output_text_new.innerHTML = "Оценка за четверть: 2";
            document.getElementById("output-text-new").style.backgroundColor = "#ff6666";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
        } else if (result_fix_new >= 21 && result_fix_new < 51) {
            output_text_new.innerHTML = "Оценка за четверть: 3";
            document.getElementById("output-text-new").style.backgroundColor = "#f9a23b";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#f9a23b");
        } else if (result_fix_new >= 51 && result_fix_new < 81){
            output_text_new.innerHTML = "Оценка за четверть: 4";
            document.getElementById("output-text-new").style.backgroundColor = "#c2d23a";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#c2d23a");
        } else if (result_fix_new >= 81 && result_fix_new <= 100) {
            output_text_new.innerHTML = "Оценка за четверть: 5";
            document.getElementById("output-text-new").style.backgroundColor = "#c2d23a";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#c2d23a");
        } else {
            output_text_new.innerHTML = "Где-то ошибка ...";
            document.getElementById("output-text-new").style.backgroundColor = "#ff6666";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
        }
    } else {
        if (result_fix_new < 0) { 
            output_text_new.innerHTML = "Где-то ошибка ...";
            document.getElementById("output-text-new").style.backgroundColor = "#ff6666";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
        } else if (result_fix_new >= 0 && result_fix_new < 40) {
            output_text_new.innerHTML = "Оценка за четверть: 2";
            document.getElementById("output-text-new").style.backgroundColor = "#ff6666";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
        } else if (result_fix_new >= 40 && result_fix_new < 65) {
            output_text_new.innerHTML = "Оценка за четверть: 3";
            document.getElementById("output-text-new").style.backgroundColor = "#f9a23b";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#f9a23b");
        } else if (result_fix_new >= 65 && result_fix_new < 85){
            output_text_new.innerHTML = "Оценка за четверть: 4";
            document.getElementById("output-text-new").style.backgroundColor = "#c2d23a";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#c2d23a");
        } else if (result_fix_new >= 85 && result_fix_new <= 100) {
            output_text_new.innerHTML = "Оценка за четверть: 5";
            document.getElementById("output-text-new").style.backgroundColor = "#c2d23a";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#c2d23a");
        } else {
            output_text_new.innerHTML = "Где-то ошибка ...";
            document.getElementById("output-text-new").style.backgroundColor = "#ff6666";
            let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
            metaThemeColorAndroid.setAttribute("content", "#ff6666");
        }
    }
    CheckIsEmpty();
}