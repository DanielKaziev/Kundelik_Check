(function (root) {
    const DIR = "events/newyear/";
    const BULBS = 42;

    function isNewYearWindow(date) {
        const m = date.getMonth(), d = date.getDate();
        return (m === 11 && d >= 15) || (m === 0 && d <= 3);
    }

    function start() {
        const css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = DIR + "newyear.css";
        document.head.appendChild(css);

        const canvas = document.createElement("canvas");
        canvas.id = "world";
        const rope = document.createElement("ul");
        rope.className = "lightrope";
        rope.innerHTML = "<li></li>".repeat(BULBS);
        document.body.prepend(canvas, rope);

        const script = document.createElement("script");
        script.src = DIR + "confetti.js";
        document.body.appendChild(script);

        document.querySelector(".menu-logo img").addEventListener("click", () => new Audio(DIR + "snd.mp3").play(), { once: true });
    }

    if (typeof module !== "undefined" && module.exports) module.exports = { isNewYearWindow };
    else if (isNewYearWindow(new Date())) start();
})(typeof globalThis !== "undefined" ? globalThis : this);
