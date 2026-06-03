let valorContador = 0;

const visorElemento = document.getElementById("visor-numero");
const botonSumar = document.getElementById("btn-sumar");
const botonLimpiar = document.getElementById("btn-limpiar");

// Escuchamos el clic para incrementar
botonSumar.addEventListener("click", function() {
    valorContador = valorContador + 1; // Modificamos el valor en memoria
    visorElemento.textContent = valorContador; // Pintamos el nuevo valor en pantalla
    console.log("Contador incrementado a:", valorContador);
});

// Escuchamos el clic para resetear a cero
botonLimpiar.addEventListener("click", function() {
    valorContador = 0; // Reiniciamos la memoria
    visorElemento.textContent = valorContador; // Sincronizamos la pantalla
    console.log("Contador reseteado con éxito.");
});