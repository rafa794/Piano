const notas = [
  { nombre: "do1", archivo: "./notas/do1.mp3" },
  { nombre: "reb1", archivo: "./notas/reB1.mp3" },
  { nombre: "re1", archivo: "./notas/re1.mp3" },
  { nombre: "miB1", archivo: "./notas/miB1.mp3" },
  { nombre: "mi1", archivo: "./notas/mi1.mp3" },
  { nombre: "fa1", archivo: "./notas/fa1.mp3" },
  { nombre: "solB1", archivo: "./notas/solB1.mp3" },
  { nombre: "sol1", archivo: "./notas/sol1.mp3" },
  { nombre: "laB1", archivo: "./notas/laB1.mp3" },
  { nombre: "la1", archivo: "./notas/la1.mp3" },
  { nombre: "siB1", archivo: "./notas/siB1.mp3" },
  { nombre: "si1", archivo: "./notas/si1.mp3" },
  { nombre: "do2", archivo: "./notas/do2.mp3" },
  { nombre: "reb2", archivo: "./notas/reB2.mp3" },
  { nombre: "re2", archivo: "./notas/re2.mp3" },
  { nombre: "miB2", archivo: "./notas/miB2.mp3" },
  { nombre: "mi2", archivo: "./notas/mi2.mp3" },
  { nombre: "fa2", archivo: "./notas/fa2.mp3" },
  { nombre: "solB2", archivo: "./notas/solB2.mp3" },
  { nombre: "sol2", archivo: "./notas/sol2.mp3" },
  { nombre: "laB2", archivo: "./notas/laB2.mp3" },
  { nombre: "la2", archivo: "./notas/la2.mp3" },
  { nombre: "siB2", archivo: "./notas/siB2.mp3" },
  { nombre: "si2", archivo: "./notas/si2.mp3dñ" },
];
const teclas = {
  a: "do1",
  w: "reb1",
  s: "re1",
  e: "miB1",
  d: "mi1",
  f: "fa1",
  t: "solB1",
  g: "sol1",
  y: "laB1",
  h: "la1",
  u: "siB1",
  j: "si1",
  k: "do2",
  o: "reb2",
  l: "re2",
  p: "miB2",
  ñ: "mi2",
  "Dead": "fa2",
  "+": "solB2",
  ç: "sol2",
  "Backspace": "laB2",
  'PageDown': "la2",
  'PageUp': "siB2",
  'End': "si2",
  };

  const teclasPulsadas = {}; // Objeto para almacenar las teclas pulsadas
  // Asignar teclas del teclado a las teclas del piano
function reproducirNota(nota) {
  const teclaPresionada = document.querySelector(`button[data-nota="${nota}"]`);
  sonidos[nota].currentTime = 0;
  sonidos[nota].play();
  teclaPresionada.classList.add("presionado");
}
// Función para detectar la pulsación de teclas
function detectarPulsacion(event) {
  if (!teclas[event.key]) {
    return;
  }  
  if (!teclasPulsadas[event.key]) {
    teclasPulsadas[event.key] = true;
    reproducirNota(teclas[event.key]);
  }
}

// Función para detectar la liberación de teclas
function detectarLiberacion(event) {
  if (!teclas[event.key]) {
    return;
  }
  delete teclasPulsadas[event.key];
  const teclaPresionada = document.querySelector(`button[data-nota="${teclas[event.key]}"]`);
  if (teclaPresionada) {
    teclaPresionada.classList.remove("presionado");
  }
}

// Detectar la pulsación y liberación de teclas del teclado
document.addEventListener("keydown", detectarPulsacion);
document.addEventListener("keyup", detectarLiberacion);

let sonidos = {};
notas.forEach((nota) => {
  sonidos[nota.nombre] = new Audio(nota.archivo);
});
const botones = document.querySelectorAll("button.tecla");

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const notaPulsada = this.getAttribute("data-nota");
    sonidos[notaPulsada].currentTime = 0; // Reiniciar la posición de la pista antes de reproducirla.
    sonidos[notaPulsada].play();
  });
})

