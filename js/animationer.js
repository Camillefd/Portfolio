const h3 = document.getElementById("typing-text");
const text = "Camille Desmareth";
h3.textContent = "";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    h3.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 130);
  }
}

typeWriter();
