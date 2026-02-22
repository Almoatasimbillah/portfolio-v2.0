// 1. تأثير الـ Glow اللي بيلحق الماوس بس بنعومة
document.addEventListener('mousemove', (e) => {
    const glow = document.getElementById('bg-glow');
    glow.style.setProperty('--x', e.clientX + 'px');
    glow.style.setProperty('--y', e.clientY + 'px');
});

// 2. الـ Typewriter اللي عند ريدوان
const text = "Hi, I'm Almoatasim. I catch bugs before they fly.";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
window.onload = typeWriter;

// 3. حركة بسيطة عند السكرول للمشاريع
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s ease-out";
    observer.observe(card);
});
