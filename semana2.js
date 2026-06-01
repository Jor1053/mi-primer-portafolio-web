console.log("--- Práctica de Tipos Primitivos ---");
console.log("Jorge Iván Salazar");
console.log(2026);
console.log(true);
console.log(undefined);

let precioProducto = 1500;
let cantidad = 3;

let totalCompra = precioProducto * cantidad;
console.log("Total de la operación matemática:", totalCompra);


function calcularPuntos(puntosConsumo, puntosVenta) {
    return puntosConsumo + puntosVenta;
}

let misPuntosTotales = calcularPuntos(143, 200);
console.log("Resultado de la función puntos:", misPuntosTotales);


let usuarioAutorizado = true;

const parrafoEstado = document.getElementById("pantalla-estado");

if (usuarioAutorizado === true) {

    parrafoEstado.textContent = "¡Acceso concedido! Bienvenido al portal de programación, Jorge. 🎉";
    parrafoEstado.style.color = "#10b981";
} else {
    parrafoEstado.textContent = "Alerta: No tienes los permisos necesarios.";
    parrafoEstado.style.color = "ef4444";
}