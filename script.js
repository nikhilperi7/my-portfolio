const text = "Hi, I'm Nikhil Peri — Full Stack Developer 🚀";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("intro").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 30);
  }
}
window.onload = typeWriter;
