document.addEventListener('mousemove', (e) => {
    document.getElementById('bg-glow').style.setProperty('--x', e.clientX + 'px');
    document.getElementById('bg-glow').style.setProperty('--y', e.clientY + 'px');
});

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

window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.querySelector(".scroll-progress").style.width = (winScroll / height) * 100 + "%";
};

function sendToWhatsapp() {
    const msg = document.getElementById('user-msg').value;
    if (!msg.trim()) return alert("Write something!");
    window.open(`https://wa.me/201060058378?text=${encodeURIComponent(msg)}`, '_blank');
}

VanillaTilt.init(document.querySelectorAll("[data-tilt]"), { max: 15, speed: 400, glare: true, "max-glare": 0.2 });
