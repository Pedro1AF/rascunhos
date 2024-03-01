document.addEventListener("DOMContentLoaded"), function() 
const texto = document.getElementById("typed-text").textContent.trim();
document.getElementById("typed-text").textContent = "";

let index = 0;
function digitar() {
  document.getElementById("container").textContent = texto.slice(0, index);
  index++;
  if (index > texto.length) {
    clearInterval(interval);
    document.getElementById("typed-text").style.display = "none";
  }
}

const interval = setInterval(digitar, 100);
