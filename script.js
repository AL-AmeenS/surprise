// Typing Effect
const text = "Helloowwwh Abinooo 💖";
let i = 0;

function typing() {
if (i < text.length) {
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing, 80);
}
}
typing();


// Move "Not Interested"
function moveButton() {
const btn = document.querySelector(".no");

const x = Math.random() * 400 - 200;
const y = Math.random() * 400 - 200;

btn.style.transform = `translate(${x}px, ${y}px)`;
}


// Floating hearts
setInterval(() => {
let heart = document.createElement("div");
heart.innerHTML = "💖";
heart.classList.add("heart");

heart.style.left = Math.random() * 100 + "vw";
heart.style.fontSize = (Math.random() * 20 + 10) + "px";

document.body.appendChild(heart);

setTimeout(() => heart.remove(), 5000);
}, 300);


// Confetti + go to dog page
function celebrate() {

for (let i = 0; i < 80; i++) {
let c = document.createElement("div");
c.innerHTML = "";
c.style.position = "absolute";
c.style.left = Math.random() * 100 + "vw";
c.style.top = Math.random() * 100 + "vh";

document.body.appendChild(c);
}

setTimeout(() => {
window.location.href = "dog.html";
}, 100);
}