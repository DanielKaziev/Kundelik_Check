(function () {
    const COLORS = [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]];
    const SPEED = 0.3;
    const width = window.screen.width;
    const COUNT = width < 500 ? 8 : width < 1000 ? 15 : width < 1500 ? 18 : 25;

    const canvas = document.getElementById("world");
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0, xpos = 0.5;

    const range = (a, b) => (b - a) * Math.random() + a;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }

    class Confetti {
        constructor() {
            const [r, g, b] = COLORS[Math.floor(range(0, COLORS.length))];
            this.rgb = `rgba(${r},${g},${b}`;
            this.r = Math.floor(range(2, 6));
            this.replace();
        }

        replace() {
            this.opacity = 0;
            this.dop = 0.01 * range(1, 4);
            this.x = range(-2 * this.r, w - 2 * this.r);
            this.y = range(-20, h - 2 * this.r);
            this.xmax = w - this.r;
            this.ymax = h - this.r;
            this.vx = SPEED * (range(0, 2) + 8 * xpos - 5);
            this.vy = SPEED * (0.7 * this.r + range(-1, 1));
        }

        draw() {
            this.x += this.vx;
            this.y += this.vy;
            this.opacity += this.dop;
            if (this.opacity > 1) {
                this.opacity = 1;
                this.dop *= -1;
            }
            if (this.opacity < 0 || this.y > this.ymax) this.replace();
            if (!(this.x > 0 && this.x < this.xmax)) this.x = (this.x + this.xmax) % this.xmax;
            ctx.beginPath();
            ctx.arc(Math.floor(this.x), Math.floor(this.y), this.r, 0, 2 * Math.PI);
            ctx.fillStyle = `${this.rgb},${this.opacity})`;
            ctx.fill();
        }
    }

    window.addEventListener("resize", resize);
    document.addEventListener("mousemove", e => { xpos = e.pageX / w; });
    resize();

    const confetti = Array.from({ length: COUNT }, () => new Confetti());

    function step() {
        requestAnimationFrame(step);
        ctx.clearRect(0, 0, w, h);
        confetti.forEach(c => c.draw());
    }
    step();
})();
