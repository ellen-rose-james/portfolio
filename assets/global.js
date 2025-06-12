// Animation on Scroll
AOS.init({
  duration: 500,
  once: false,
  easing: "ease-in-out",
  offset: 20,
});

function updateAOS() {
  const isSmallScreen = window.innerWidth <= 768;
  const sections = [
    document.querySelector(".skills.section"),
    document.querySelector(".intro.section"),
    document.querySelector(".education.section"),
  ];
  sections.forEach((el) => {
    if (el) {
      el.setAttribute(
        "data-aos",
        isSmallScreen
          ? "fade-up"
          : el.dataset.aosOriginal || el.getAttribute("data-aos")
      );
    }
  });
}
document
  .querySelectorAll(".skills.section, .intro.section, .education.section")
  .forEach((el) => {
    el.dataset.aosOriginal = el.getAttribute("data-aos");
  }
);

window.addEventListener("resize", updateAOS);
window.addEventListener("DOMContentLoaded", updateAOS);

// Typewriter Effect
const text = "Hi! I'm Ellen";
let index = 0;
function type() {
  if (index < text.length) {
    document.getElementById("typed-text").textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
window.onload = type;

// Cursor Follow

let c = document.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  c.style.left = x - 22 + "px";
  c.style.top = y - 22 + "px";
});

document.addEventListener("mouseleave", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  c.style.left = x - 22 + "px";
  c.style.top = y - 22 + "px";
});

// Project Popup

const popup = document.getElementById("popup");
const iframe = document.getElementById("popupFrame");

document.querySelectorAll(".external-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const url = this.href;
    iframe.src = url;
    popup.style.display = "flex";
  });
});

function closePopup() {
  popup.style.display = "none";
  iframe.src = "";
}

// Easter Egg - Color Platte Change and Time-Customised Alert
function getTimePeriod() {
  const hour = new Date().getHours();
  if (hour >= 4 && hour < 12) return "morning";
  else if (hour >= 12 && hour < 16) return "afternoon";
  else if (hour >=  16 && hour < 19) return "evening";
  else return "night";
}

function applyTheme() {
  const period = getTimePeriod();
  document.body.classList.add(period);

  const greeting = {
    morning: "Good morning, sunshine! 🌞🌅\nMay your coffee be strong and your responsibilities weak ☕✨",
    afternoon: "Good afternoon, dreamer! 🌞\nYou're doing great, even if your brain feels like a browser with 47 tabs open 😉",
    evening: "Good evening, golden soul! 🌇\nStill existing? That’s a win. No further notes 🎀",
    night: "Good night, stargazer! 🌙🌉\nPermission granted to emotionally log off and disintegrate into soft blankets 🌠"
  };

  
  document.querySelector(".easteregg").addEventListener("click", function (e) {
    e.preventDefault();
    const greet = greeting[period];
    alert(
      "🎉 Congratulations! You have discovered an Easter egg!\n\n" + greet
    );
  });
}

applyTheme();
