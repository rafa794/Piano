const notas = [
  { nombre: "c3", archivo: "./notas/c3.mp3" },
  { nombre: "ca3", archivo: "./notas/ca3.mp3" },
  { nombre: "d3", archivo: "./notas/d3.mp3" },
  { nombre: "da3", archivo: "./notas/da3.mp3" },
  { nombre: "e3", archivo: "./notas/e3.mp3" },
  { nombre: "f3", archivo: "./notas/f3.mp3" },
  { nombre: "fa3", archivo: "./notas/fa3.mp3" },
  { nombre: "g3", archivo: "./notas/g3.mp3" },
  { nombre: "ga3", archivo: "./notas/ga3.mp3" },
  { nombre: "a4", archivo: "./notas/a4.mp3" },
  { nombre: "aa4", archivo: "./notas/aa4.mp3" },
  { nombre: "b4", archivo: "./notas/b4.mp3" },
  { nombre: "c4", archivo: "./notas/c4.mp3" },
  { nombre: "ca4", archivo: "./notas/ca4.mp3" },
  { nombre: "d4", archivo: "./notas/d4.mp3" },
  { nombre: "da4", archivo: "./notas/da4.mp3" },
  { nombre: "e4", archivo: "./notas/e4.mp3" },
  { nombre: "f4", archivo: "./notas/f4.mp3" },
  { nombre: "fa4", archivo: "./notas/fa4.mp3" },
  { nombre: "g4", archivo: "./notas/g4.mp3" },
  { nombre: "ga4", archivo: "./notas/ga4.mp3" },
  { nombre: "a5", archivo: "./notas/a5.mp3" },
  { nombre: "aa5", archivo: "./notas/aa5.mp3" },
  { nombre: "b5", archivo: "./notas/b5.mp3" },
];

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
});
// Asignar teclas del teclado a las teclas del piano
const teclas = {
  a: "c3",
  w: "ca3",
  s: "d3",
  e: "da3",
  d: "e3",
  f: "f3",
  t: "fa3",
  g: "g3",
  y: "ga3",
  h: "a4",
  u: "aa4",
  j: "b4",
  k: "c4",
  o: "ca4",
  l: "d4",
  p: "da4",
  ñ: "e4",
  "'": "f4",
  "]": "fa4",
  "\\": "g4",
  Enter: "ga4",
  z: "a5",
  x: "aa5",
  c: "b5",
};

function reproducirNota(nota) {
  sonidos[nota].currentTime = 0;
  sonidos[nota].play();
}

// Función para verificar si se están pulsando más de 4 teclas
function verificarTeclasPulsadas() {
  const teclasPulsadasCount = Object.keys(teclasPulsadas).length;
  if (teclasPulsadasCount > 4) {
    alert("Solo puedes pulsar hasta 4 teclas a la vez.");
    return false;
  }
  return true;
}

// Función para detectar la pulsación de teclas
function detectarPulsacion(event) {
  if (!teclas[event.key]) {
    return;
  }
  if (!verificarTeclasPulsadas()) {
    event.preventDefault();
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
}

// Detectar la pulsación y liberación de teclas del teclado
document.addEventListener("keydown", detectarPulsacion);
document.addEventListener("keyup", detectarLiberacion);
