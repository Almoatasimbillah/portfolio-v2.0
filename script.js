// Glow Follow Mouse
document.addEventListener('mousemove', (e) => {
    document.getElementById('bg-glow').style.setProperty('--x', e.clientX + 'px');
    document.getElementById('bg-glow').style.setProperty('--y', e.clientY + 'px');
});

// Typewriter
const text = "Eng. Almoatasim | Quality Engineering Excellence_";
let i = 0;
function type() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 50);
    }
}
window.onload = type;

// Theme Toggle
const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const icon = btn.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Scroll Progress
window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.querySelector(".scroll-progress").style.width = (winScroll / height) * 100 + "%";
};

// WhatsApp
function sendToWhatsapp() {
    const msg = document.getElementById('user-msg').value;
    if(!msg.trim()) return alert("Write something first!");
    window.open(`https://wa.me/201060058378?text=${encodeURIComponent(msg)}`, '_blank');
}

// Tilt
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 15, speed: 400, glare: true, "max-glare": 0.1
});
