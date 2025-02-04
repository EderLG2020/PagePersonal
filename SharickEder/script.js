document.addEventListener("DOMContentLoaded", function() {
    const audio = new Audio("love.mp3"); 
    
    const playAudio = () => {
        audio.play().catch(error => {
            console.log("Reproducción automática bloqueada, esperando interacción del usuario.");
        });
    };
    
    playAudio();
    
    document.body.addEventListener("click", () => {
        audio.play();
    }, { once: true });
});

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'F12') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
  }
});


function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️"; // Puedes cambiarlo por otro emoji o símbolo
    heart.style.left = Math.random() * 100 + "vw"; // Posición aleatoria en la pantalla
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Duración aleatoria para variedad
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
      document.getElementById("preloader").classList.add("hide-preloader");
      setTimeout(() => {
          document.getElementById("preloader").style.display = "none"; 
      }, 1000);
  }, 2000);
});

setInterval(createHeart, 500);
