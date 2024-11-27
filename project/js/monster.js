const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = { x: canvas.width / 2, y: canvas.height / 2 }; // Начальная позиция персонажа
let smoothMouse = { x: canvas.width / 2, y: canvas.height / 2 }; // Плавное движение персонажа

class Bubble {
    constructor() {
        this.x = smoothMouse.x;
        this.y = smoothMouse.y;
        this.size = 50; // Размер пузыря
        this.trail = []; // След из частиц
        this.trailLength = 30; // Длина следа
    }

    update() {
        // Плавное следование за курсором
        smoothMouse.x += (mouse.x - smoothMouse.x) * 0.1;
        smoothMouse.y += (mouse.y - smoothMouse.y) * 0.1;

        this.x = smoothMouse.x;
        this.y = smoothMouse.y;

        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > this.trailLength) {
            this.trail.shift(); // Удаление старых частиц
        }
    }

    draw() {
        for (let i = 0; i < this.trail.length; i++) {
            const t = this.trail[i];
            const opacity = i / this.trail.length; // Затухание следа
            ctx.beginPath();
            ctx.arc(t.x, t.y, (this.size * (i / this.trail.length)) / 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(100, 200, 255, ${opacity})`;
            ctx.fill();
        }


        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(50, 150, 255, 0.8)";
        ctx.shadowColor = "rgba(50, 150, 255, 0.8)";
        ctx.shadowBlur = 20;
        ctx.fill();
    }
}

const bubble = new Bubble();

// Анимация
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bubble.update();
    bubble.draw();

    requestAnimationFrame(animate);
}


window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Адаптация к изменению размера окна
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animate();