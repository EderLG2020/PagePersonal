const mensajes = [
  "¿Estás segura, Sayuri? 🥺",
  "¿Segura que estás segura?",
  "¿Estás completamente segura? 😢",
  "Piénsalo bien, mi Sayuri...",
  "Solo quiero que me perdones 💖",
  "Le daré like a todos tus videos 😳",
  "Haré lo que quieras, palabra ✋",
  "Te quiero 3 millones 💕",
  "Ya puesss 😭",
  "¿Ta bien? 🙃",
  "Sayuri, no seas mala 😭",
  "Te invito algo rico 🍫",
  "Puedo ser más lindo si quieres 😳",
  "¿Y si te doy un abracito? 🤗",
  "¿Una última oportunidad sí? 🥹",
  "Mi corazoncito depende de ti 💗",
  "¿Te hago reír? 😄",
  "¿Por favor? 🥺👉👈",
  "¿Poooooor faaaaaavor? 😭",
  "¿Por tu niño? 😳",
  "Piensa en nosotros 😌",
  "No seas cruel con este pobre corazón 💔",
  "Si dices que sí, te doy chocolatito 🍫",
  "Te prometo no molestar... (mentira jijiji) 😆",
  "Es que eres muy linda 😳",
  "Si dices que sí, te dedico una canción 🎶",
  "Ya pues Sayuri, no seas así 😭",
  "¿Solo un sí chiquitito? 🐣",
  "Hazlo por mí... y por el futuro 🫶",
  "¿Estás segura? Por última vez 😭",
  "Te extraño aunque no debería 😔",
  "Te mando un abrazo virtual 🤗",
  "Sayuriii… 🥺",
  "Si dices que sí, sonrío todo el día 😊",
  "Si dices que no, me muero… bueno no tanto, pero sí me pongo sad 😔",
  "¿Y si mejor le das al ‘Sí’? 😏",
  "¿Me perdonas si hago ojitos bonitos? 👀",
  "Mira que el botón ‘Sí’ está más bonito 😌",
  "Un sí tuyo y soy feliz 💗",
  "¿Me extrañaste tantito? 😳",
  "Última pregunta: ¿segura? 😭",
];


const boton_no = document.getElementById("btn-no");
const boton_yes = document.getElementById("btn-yes");
const boton_whatsapp = document.getElementById("btn-whatsapp");

const mensaje = document.getElementById("mensaje");
const resultado = document.getElementById("resultado");

let count = 1;

boton_no.addEventListener("mouseover", function () {
  let sonido = document.getElementById("miSonido");
  sonido.play();
  const randomX = Math.random() * (window.innerWidth - boton_no.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - boton_no.offsetHeight);
  mensaje.innerText = mensajes[count - 1];

  boton_yes.style.height = 8 * count + "%";
  boton_yes.style.width = 10 * count + "%";
  boton_no.style.height = 50 - 7 * count + "px";
  boton_no.style.width = 200 - 10 * count + "px";
  boton_no.style.maxWidth = "100vw";

  boton_no.style.position = "absolute";
  boton_no.style.left = randomX + "px";
  boton_no.style.top = randomY + "px";
  boton_yes.style.position = "absolute";
  boton_yes.style.left = 40 - count * 3.5 + "%";
  boton_yes.style.top = 50 - count * 3 + "%";
  count += 1;
});

boton_yes.addEventListener("click", function () {
  let sonido = document.getElementById("miSonido2");
  sonido.play();
  resultado.style.display = "flex";
  resultado.style.flexDirection = "column";
  resultado.style.alignItems = "center";
  resultado.style.position = "absolute";
  resultado.style.zIndex = "50";
});

boton_whatsapp.addEventListener("click", function () {
  var telefono = "932375676";
  var mensaje = "Hola, te perdoné";
  let url =
    "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
  window.open(url);
});