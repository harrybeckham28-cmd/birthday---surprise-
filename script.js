
const text =
"Happy Birthday Ammuueeyyy! 🥹🎂 Today is all about celebrating you. I hope your day is filled with happiness, laughter, and wonderful memories. Thank you for being such an amazing person. ❤️";

let i = 0;
const typing = document.getElementById("typing");

function typeWriter() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 45);
  }
}
typeWriter();

const home = document.getElementById("home");
const surprise = document.getElementById("surprise");
const memory = document.getElementById("memory");
const finalPage = document.getElementById("final");

document.getElementById("openBtn").onclick = () => {
  home.style.display = "none";
  surprise.style.display = "flex";
};

document.getElementById("next").onclick = () => {
  surprise.style.display = "none";
  memory.style.display = "flex";
};

document.getElementById("last").onclick = () => {
  memory.style.display = "none";
  finalPage.style.display = "flex";
  confetti();
};

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (20 + Math.random() * 25) + "px";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 300);

function confetti() {
  for (let j = 0; j < 120; j++) {
    const piece = document.createElement("div");

    piece.style.position = "fixed";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-20px";
    piece.style.width = "10px";
    piece.style.height = "10px";
    piece.style.borderRadius = "50%";
    piece.style.background =
      `hsl(${Math.random() * 360},100%,60%)`;

    piece.style.transition = "5s linear";

    document.body.appendChild(piece);

    setTimeout(() => {
      piece.style.transform =
        `translateY(110vh) rotate(${Math.random() * 720}deg)`;
    }, 100);

    setTimeout(() => {
      piece.remove();
    }, 5200);
  }
}
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = () => {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";
    }
};
    