// Glow effect
document.addEventListener('mousemove', (e) => {
    document.getElementById('bg-glow').style.setProperty('--x', e.clientX + 'px');
    document.getElementById('bg-glow').style.setProperty('--y', e.clientY + 'px');
});

// Typewriter
const text = "Hi, I'm Almoatasim. I find what others miss_";
let i = 0;
function type() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 50);
    }
}
window.onload = type;

// Scroll progress
window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".scroll-progress").style.width = scrolled + "%";
};

// Whatsapp Logic
function sendToWhatsapp() {
    const msg = document.getElementById('user-msg').value;
    const phone = "201060058378";
    if (!msg.trim()) return alert("Write something first!");
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

// Tilt init
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.1,
});
