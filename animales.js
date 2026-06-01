class Animal {

    constructor(nombre, sonido) {
        this.nombre = nombre;
        this.sonido = sonido;
    }

    emitirSonido() {

        return `Soy un ${this.nombre} y hago: ${this.sonido}`;
    }
}

const perro = new Animal("perro", "guau");
const gato = new Animal("gato", "miau");
const tigre = new Animal("tigre", "grrr");


console.log("--- Instancias de POO ---");
console.log(perro.emitirSonido());
console.log(gato.emitirSonido());
console.log(tigre.emitirSonido());

const listaSonidos = document.getElementById("lista-sonidos");

listaSonidos.innerHTML = `
    <li>${perro.emitirSonido()}</li>
    <li>${gato.emitirSonido()}</li>
    <li>${tigre.emitirSonido()}</li>
`;