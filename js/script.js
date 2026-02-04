const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const celebration = document.getElementById("celebration");
const buttonsDiv = document.getElementById("buttons");
const question = document.getElementById("question");
const heartsContainer = document.getElementById("hearts-container");
const music = document.getElementById("music");

let roaming = false;

/* NO button escape */
function moveNoButton() {
    if (!roaming) {
        roaming = true;
        noBtn.style.position = "absolute";
    }

    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", moveNoButton);

/* YES clicked */
yesBtn.onclick = () => {
    buttonsDiv.style.display = "none";
    question.style.display = "none";
    celebration.classList.remove("hidden");

    music.play();
    startHearts();
    animateLoveMeter();
    slideshow();
};

/* Falling hearts */
function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "💖";
        heart.style.left = Math.random()*window.innerWidth+"px";
        heart.style.animationDuration = 3 + Math.random()*2 + "s";
        heartsContainer.appendChild(heart);
        setTimeout(()=>heart.remove(),5000);
    },200);
}

/* Love meter */
function animateLoveMeter() {
    let value = 0;
    const fill = document.getElementById("fill");
    const text = document.getElementById("loveValue");

    const timer = setInterval(() => {
        value++;
        fill.style.width = value + "%";
        text.innerText = value + "%";
        if (value >= 100) clearInterval(timer);
    }, 25);
}

/* Slideshow */
const photos = [
    "assets/pic1.jpeg",
    "assets/pic2.jpeg",
    "assets/pic3.jpeg"
];

function slideshow() {
    let index = 0;
    const slide = document.getElementById("slide");

    setInterval(() => {
        index = (index + 1) % photos.length;
        slide.src = photos[index];
    }, 2000);
}

/* Love letter */
document.getElementById("letterBtn").onclick = () =>
    document.getElementById("letterPopup").classList.remove("hidden");

function closeLetter() {
    document.getElementById("letterPopup").classList.add("hidden");
}
