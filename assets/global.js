// Animation on Scroll
AOS.init({
    duration: 500, 
    once: false, 
    easing: 'ease-in-out',
    offset: 20,
});

function updateAOS() {
  const isSmallScreen = window.innerWidth <= 768;
  const sections = [
    document.querySelector('.skills.section'),
    document.querySelector('.intro.section'),
    document.querySelector('.education.section')
  ];
  sections.forEach(el => {
    if (el) {
      el.setAttribute('data-aos', isSmallScreen ? 'fade-up' : el.dataset.aosOriginal || el.getAttribute('data-aos'));
    }
  });
}
document.querySelectorAll('.skills.section, .intro.section, .education.section').forEach(el => {
  el.dataset.aosOriginal = el.getAttribute('data-aos');
});

window.addEventListener('resize', updateAOS);
window.addEventListener('DOMContentLoaded', updateAOS);


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

// 

let c = document.querySelector('.cursor-circle');

document.addEventListener('mousemove', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  c.style.left = (x - 22) + "px";
  c.style.top = (y - 22) + "px";
});

document.addEventListener('mouseleave', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  c.style.left = (x - 22) + "px";
  c.style.top = (y - 22) + "px";
});
