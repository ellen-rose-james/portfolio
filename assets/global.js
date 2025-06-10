// Animation on Scroll
AOS.init({
    duration: 1000, 
    once: false, 
    easing: 'ease-in-out',
    offset: 20,
});

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


