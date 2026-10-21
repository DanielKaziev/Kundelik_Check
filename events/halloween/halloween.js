(function (root) {
    const DIR = "events/halloween/";

    function isHalloweenWindow(date) {
        const m = date.getMonth(), d = date.getDate();
        return (m === 9 && d >= 28) || (m === 10 && d === 1);
    }

    function start() {
        const link = href => {
            const el = document.createElement("link");
            el.rel = "stylesheet";
            el.href = href;
            document.head.appendChild(el);
        };
        link("https://fonts.googleapis.com/css?family=Eater");
        link(DIR + "halloween.css");

        const box = document.createElement("div");
        box.className = "container";
        box.innerHTML = '<div class="row"><div class="col-12"><h1 id="halloween-title">Happy Halloween!</h1></div></div>';
        document.querySelector(".menu").closest(".container").after(box);
        box.querySelector("h1").addEventListener("click", () => new Audio(DIR + "snd.mp3").play(), { once: true });
    }

    if (typeof module !== "undefined" && module.exports) module.exports = { isHalloweenWindow };
    else if (isHalloweenWindow(new Date())) start();
})(typeof globalThis !== "undefined" ? globalThis : this);
