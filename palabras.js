const words = ["tough", "though", "thought", "through", "throughout", "thorough"];

const elementoPalabra = document.getElementById("palabra-mostrada");
const elementoInput = document.getElementById("ingreso-palabra");
const elementoProximaPalabra = document.getElementById("proxima-palabra");

let palabraActual;
let proximaPalabra;

function mostrarNuevaPalabra() {
  // Si ya hay una próxima palabra, se convierte en la palabra actual
  if (proximaPalabra) {
    palabraActual = proximaPalabra;
  } else {
    // Si no, genera la primera palabra aleatoria
    palabraActual = words[Math.floor(Math.random() * words.length)];
  }

  // Genera la próxima palabra aleatoria
  proximaPalabra = words[Math.floor(Math.random() * words.length)];

  // Muestra la palabra actual y la siguiente en sus respectivos divs
  elementoPalabra.textContent = palabraActual;
  elementoProximaPalabra.textContent = proximaPalabra;

  elementoInput.value = "";
}

mostrarNuevaPalabra();

elementoInput.addEventListener("input", () => {
  if (elementoInput.value.trim() === palabraActual) {
    mostrarNuevaPalabra();
  }
});