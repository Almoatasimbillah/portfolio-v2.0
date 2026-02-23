// 1. مكتبة Vanilla TiltJS لتأثير الميلان
// ده بيشتغل لوحده على أي عنصر ليه data-tilt
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 10, // أقصى ميلان
    speed: 400, // سرعة التأثير
    glare: true, // تأثير لمعان خفيف
    "max-glare": 0.2, // شدة اللمعان
});

// 2. مؤشر الماوس المخصص
const customCursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
});

// تكبير المؤشر لما يقف على لينك أو زرار
document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => customCursor.style.width = customCursor.style.height = '45px');
    el.addEventListener('mouseleave', () => customCursor.style.width = customCursor.style.height = '25px');
});


// 3. تأثير الـ Glow اللي بيلحق الماوس بس بنعومة
document.addEventListener('mousemove', (e) => {
    const glow = document.getElementById('bg-glow');
    glow.style.setProperty('--x', e.clientX + 'px');
    glow.style.setProperty('--y', e.clientY + 'px');
});

// 4. الـ Typewriter اللي عند ريدوان
const textToType = "Hi, I'm Almoatasim. I catch bugs before they fly.";
let i = 0;
function typeWriter() {
    if (i < textToType.length) {
        document.getElementById("typewriter").innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    } else {
        // بعد ما يخلص كتابة، ممكن نعمل animation للـ Hero Actions
        document.querySelector('.hero-actions').style.opacity = 1;
        document.querySelector('.hero-actions').style.transform = "translateY(0)";
    }
}
window.onload = () => {
    typeWriter();
    // إخفاء الأزرار في البداية عشان تظهر بعد الـ typewriter
    document.querySelector('.hero-actions').style.opacity = 0;
    document.querySelector('.hero-actions').style.transform = "translateY(20px)";
    document.querySelector('.hero-actions').style.transition = "opacity 0.5s ease-out 0.5s, transform 0.5s ease-out 0.5s";
};


// 5. شريط التقدم عند السكرول
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.scroll-progress').style.width = scrolled + "%";
});

// 6. حركة بسيطة عند السكرول للمشاريع والـ Testimonials (ظهور تدريجي)
const observerOptions = {
    root: null, // بيراقب الـ viewport
    rootMargin: '0px',
    threshold: 0.1 // يظهر لما 10% من العنصر يبقى مرئي
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target); // خلاص العنصر ظهر، مبقتش محتاج أراقبه تاني
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .testimonial-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(50px)";
    card.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    sectionObserver.observe(card);
});
