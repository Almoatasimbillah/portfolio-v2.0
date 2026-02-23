document.addEventListener('mousemove', (e) => {
    document.getElementById('bg-glow')
        .style.setProperty('--x', e.clientX + 'px');
    document.getElementById('bg-glow')
        .style.setProperty('--y', e.clientY + 'px');
});

const text = "Hi, I'm Almoatasim — Senior QA Engineer.";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 40);
    }
}
window.onload = type;

window.addEventListener("scroll", () => {
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".scroll-progress").style.width = scrolled + "%";
});

function sendToWhatsapp() {
    const msg = document.getElementById('user-msg').value;
    const phone = "201060058378";

    if (!msg.trim()) {
        alert("Please write your project details first.");
        return;
    }

    const finalMessage =
        `Hello Almoatasim,\n\nI have a project:\n${msg}\n\nLet's discuss it.`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(finalMessage)}`, '_blank');
}

VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.1,
});
