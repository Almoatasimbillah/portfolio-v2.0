const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let atoms = [];

window.addEventListener('mousemove', function(e) {
    for (let i = 0; i < 3; i++) {
        atoms.push(new Atom(e.x, e.y));
    }
});

class Atom {
    constructor(x, y) {
        this.x = x; this.y = y;
        this.size = Math.random() * 20 + 2;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    update() {
        this.x += this.speedX; this.y += this.speedY;
        if (this.size > 0.3) this.size -= 0.1;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < atoms.length; i++) {
        atoms[i].update(); atoms[i].draw();
        if (atoms[i].size <= 0.3) { atoms.splice(i, 1); i--; }
    }
    requestAnimationFrame(animate);
}
animate();

// Typewriter Effect
const text = "Hey, I am Almoatasim _";
let index = 0;
function type() {
    if (index < text.length) {
        document.querySelector('.welcome-text').innerHTML = text.slice(0, index) + '<span style="color:white">|</span>';
        index++;
        setTimeout(type, 100);
    }
}
type();
