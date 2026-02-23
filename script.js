// 1. الماوس والـ Glow
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    // تحريك التوهج الخلفي
    document.getElementById('bg-glow').style.setProperty('--x', e.clientX + 'px');
    document.getElementById('bg-glow').style.setProperty('--y', e.clientY + 'px');
    // تحريك الدايرة الشفافة
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 2. تأثير الكتابة (Typewriter)
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

// 3. شريط التقدم للسكرول
window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".scroll-progress").style.width = scrolled + "%";
};

// 4. دالة إرسال الواتساب برقمك
function sendToWhatsapp() {
    const msg = document.getElementById('user-msg').value;
    const phone = "201060058378"; // رقم موبايلك انضاف هنا
    
    if (!msg.trim()) {
        alert("Please write something first! / اكتب رسالة الأول يا بطل");
        return;
    }
    
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

// 5. تفعيل تأثير الـ Tilt للمشاريع
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.1
});
