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
  });

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

// Easter Egg
function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return "Good morning!!!🌅\nMay your coffee be strong and your responsibilities weak ☕✨";
  } else if (hour >= 12 && hour < 17) {
    return "Good afternoon!!🌞\nYou're doing great, even if your brain feels like a browser with 47 tabs open 😉";
  } else if (hour >= 17 && hour < 21) {
    return "Good evening!!🌇\nStill existing? That’s a win. No further notes 🎀";
  } else {
    return "Good night!!🌉\nPermission granted to emotionally log off and disintegrate into soft blankets 🌠";
  }
}

document.querySelector(".easteregg").addEventListener("click", function (e) {
  e.preventDefault();
  const greeting = getGreeting();
  alert(
    "🎉 Congratulations! You have discovered an Easter egg!\n\n" + greeting
  );
});
