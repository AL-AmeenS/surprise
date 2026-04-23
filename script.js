// ===== Typing Effect =====
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


// ===== Move "Not Interested" button =====
function moveButton() {
  const btn = document.querySelector(".no");
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // Keep movement within viewport
  const maxX = Math.min(160, vw * 0.3);
  const maxY = Math.min(160, vh * 0.2);

  const x = Math.random() * maxX * 2 - maxX;
  const y = Math.random() * maxY * 2 - maxY;

  btn.style.transform = `translate(${x}px, ${y}px)`;
}


// ===== Floating hearts =====
setInterval(() => {
  let heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.classList.add("heart");
  heart.style.left     = Math.random() * 100 + "vw";
  heart.style.bottom   = "-30px";
  heart.style.fontSize = (Math.random() * 20 + 10) + "px";
  heart.style.position = "fixed";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 400);


// ===== Celebrate + navigate =====
function celebrate() {
  for (let k = 0; k < 60; k++) {
    let c = document.createElement("div");
    c.innerHTML = ["🎉","✨","💖","🎊"][Math.floor(Math.random()*4)];
    c.style.cssText = `
      position:fixed;
      left:${Math.random()*100}vw;
      top:${Math.random()*100}vh;
      font-size:${Math.random()*24+14}px;
      pointer-events:none;
      z-index:9999;
      animation: fadeOut 0.8s forwards;
    `;
    document.body.appendChild(c);
  }

  // Add quick fadeOut keyframe if not present
  if (!document.getElementById("fo-style")) {
    const s = document.createElement("style");
    s.id = "fo-style";
    s.textContent = "@keyframes fadeOut{to{opacity:0;transform:translateY(-40px)}}";
    document.head.appendChild(s);
  }

  setTimeout(() => { window.location.href = "dog.html"; }, 900);
}
