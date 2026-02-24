// Glow Follow Mouse
document.addEventListener('mousemove', (e) => {
    document.getElementById('bg-glow').style.setProperty('--x', e.clientX + 'px');
    document.getElementById('bg-glow').style.setProperty('--y', e.clientY + 'px');
});

// Typewriter Effect
const text = "Eng. Almoatasim | Quality Engineering Excellence_";
let i = 0;
function type() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 70);
    }
}
window.onload = type;

// Theme Toggle with Memory
const btn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    btn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

btn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    let theme = 'dark';
    const icon = btn.querySelector('i');
    
    if (document.body.classList.contains('light-theme')) {
        theme = 'light';
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
    localStorage.setItem('theme', theme);
});

// Scroll Progress Bar
window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.querySelector(".scroll-progress").style.width = (winScroll / height) * 100 + "%";
};

// WhatsApp Integration
function sendToWhatsapp() {
    const msg = document.getElementById('user-msg').value;
    if(!msg.trim()) {
        alert("Please write your message first! / من فضلك اكتب رسالتك أولاً");
        return;
    }
    // رقمك مضاف مسبقاً في الرابط
    const whatsappUrl = `https://wa.me/201060058378?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
}

// Tilt Initialization
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 10, speed: 400, glare: true, "max-glare": 0.1, scale: 1.02
});
