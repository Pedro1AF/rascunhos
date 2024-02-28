document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('typed-text');
    const text = textElement.textContent.trim(); // Obtém o texto do elemento p
    textElement.textContent = ''; // Limpa o texto do elemento p
    
    let index = 0;
    const speed = 100; // Velocidade de digitação em milissegundos
  
    function typeText() {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, speed);
      } else {
        document.querySelector('.cursor').style.animation = 'blink 1s infinite'; // Faz o cursor piscar no final do texto
        document.getElementById('final-image').style.display = 'block'; // Exibe a imagem após todo o texto ser digitado
      }
    }
  
    typeText();
  });