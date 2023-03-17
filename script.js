const notas = [
  { nombre: "c3", archivo: "/notas/c3.mp3" },
  { nombre: "ca3", archivo: "/notas/ca3.mp3" },
  { nombre: "d3", archivo: "/notas/d3.mp3" },
  { nombre: "da3", archivo: "/notas/da3.mp3" },
  { nombre: "e3", archivo: "/notas/e3.mp3" },
  { nombre: "f3", archivo: "/notas/f3.mp3" },
  { nombre: "fa3", archivo: "/notas/fa3.mp3" },
  { nombre: "g3", archivo: "/notas/g3.mp3" },
  { nombre: "ga3", archivo: "/notas/ga3.mp3" },
  { nombre: "a4", archivo: "/notas/a4.mp3" },
  { nombre: "aa4", archivo: "/notas/aa4.mp3" },
  { nombre: "b4", archivo: "/notas/b4.mp3" },
  { nombre: "c4", archivo: "/notas/c4.mp3" },
  { nombre: "ca4", archivo: "/notas/ca4.mp3" },
  { nombre: "d4", archivo: "/notas/d4.mp3" },
  { nombre: "da4", archivo: "/notas/da4.mp3" },
  { nombre: "e4", archivo: "/notas/e4.mp3" },
  { nombre: "f4", archivo: "/notas/f4.mp3" },
  { nombre: "fa4", archivo: "/notas/fa4.mp3" },
  { nombre: "g4", archivo: "/notas/g4.mp3" },
  { nombre: "ga4", archivo: "/notas/ga4.mp3" },
  { nombre: "a5", archivo: "/notas/a5.mp3" },
  { nombre: "aa5", archivo: "/notas/aa5.mp3" },
  { nombre: "b5", archivo: "/notas/b5.mp3" },
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
