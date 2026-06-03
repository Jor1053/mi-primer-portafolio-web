let libro = 'El programador pragmático';
let telf = '406-234 2342' ;
let color = 'amarillo' ;
let entero = 100;
let decimal = 1.967857;
let autorizado = true;
let seleccionado = false;
let números = [23, 45, 16, 37, 3, 99, 22];
let animales = ['perro', 'gato', 'tigre'];
let datosMixtos = ['texto', 69, true, ['lista dentro de otra lista']];
let jugadores = {
    10: 'Messi',
    7: 'Cristiano Ronaldo'
};
let países = {
    EC: 'Ecuador',
    MX: 'México',
    AR: 'Argentina'
};

let emails = {
    'Juan': ['juan@gmail.com'],
    'Ricardo': [
        'ricardo@gmail.com',
        'ricardo@hotmail.com'
    ]
};

const pi = 3.14159265359;
console.log(1 + 1);
console.log(1 - 1);
console.log(10 * 2);
console.log(10 / 2);

console.log(4 == 4);
console.log(4 === '4');
console.log(4 != 5);
console.log(4 < 5);
console.log(4 >= 5);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

autorizado = false;

if (autorizado) {
    console.log('Puede ingresar');
} else {
    console.log('No puede ingresar');
}

entero = 100;
if (entero === 99) {
    console.log('Es 99');
} else if (entero === 100) {
    console.log('Es 100');
} else {
    console.log('No es 99 ni 100');
}

color = 'amarillo';
switch (color) {
    case 'verde':
        console.log('Éxito');
        break;
        case 'amarillo':
            console.log('Advertencia');
            break;
            default:
                console.log('Error');
                break;
}

function sumar(primero, segundo) {
    return primero + segundo;
}

let resultado = sumar(3,4);
console.log(resultado);

function multiplicar(primero, segundo) {
    console.log(primero * segundo);
}

multiplicar(100, 2); // 200

function imprimirPrimerElemento(lista) {
    console.log(lista[0]);
}

animales = ['perro', 'gato', 'tigre'];
imprimirPrimerElemento(animales); // perro

function quicksort(lista) {
    if (lista.length <= 1) {
        return lista;
    }
    let pivote = lista[0];
    let izquierda = [];
    let derecha = [];
    for (let i = 1; i < lista.length; i++) {
        lista[i] < pivote ? izquierda.push(lista[i]) : derecha.push(lista[i]);
    }
    return quicksort(izquierda) .concat(pivote, quicksort(derecha));
};

números = [23, 45, 16, 37, 3, 99, 22];
let listaOrdenada = quicksort(números)
console.log(listaOrdenada);

animales = ['perro', 'gato', 'tigre'];

for (let animal of animales) {
    console.log(animal);
}

// Cambiamos el nombre para que sea único en el archivo index.js
const numerosNuevos = [23, 45, 16, 37, 3, 99, 22];

function duplicarNumero(primero, segundo) {
    console.log(primero * segundo);
}

for (let numero of numerosNuevos) {
    duplicarNumero(numero, 2);
}

entero = 100;
let emergencia = 911;

while (entero <= emergencia) {
    console.log(entero);
    entero++;
}

let javascript = {
    nombre: 'JavaScript',
    año: 1995,
    descripción: function () {
        console.log(`${this.nombre} fue creado en ${this.año}`);
    }
};

javascript.descripción();

class Lenguaje {
    constructor(nombre, año) {
        this.nombre = nombre;
        this.año = año;
    }
    descripción() {
        console.log(`${this.nombre} fue creado en ${this.año}`);
    }
}

new Lenguaje('JavaScript', 1995);
javascript.descripción();

javascript = new Lenguaje('JavaScript', 1995);
javascript.descripción();
let html = new Lenguaje('HTML', 1993);
html.descripción();
let css = new Lenguaje('CSS', 1996);
css.descripción();

import { restar } from './modulo.js';

restar(10, 2);