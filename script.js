// 1. Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const icon = themeBtn.querySelector('i');
    if (document.body.classList.contains('light-theme')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// 2. Glow Follows Mouse
document.addEventListener('mousemove', (e) => {
    document.getElementById('bg-glow').style.setProperty('--x', e.clientX + 'px');
    document.getElementById('bg-glow').style.setProperty('--y', e.clientY + 'px');
});

// 3. Typewriter Effect
const text = "Eng. Almoatasim | QA Engineering Excellence_";
let i = 0;
function type() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 60);
    }
}
window.onload = type;

// 4. Scroll Progress
window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.querySelector(".scroll-progress").style.width = (winScroll / height) * 100 + "%";
};

// 5. WhatsApp Integration
function sendToWhatsapp() {
    const msg = document.getElementById('user-msg').value;
    const phone = "201060058378";
    if (!msg.trim()) return alert("Write your message first!");
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

// 6. Init Tilt Effects
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 12, speed: 400, glare: true, "max-glare": 0.15
});
