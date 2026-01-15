const persona = {
    nombre: "juan",
    apellido: "Perez",
    edad: 30,
}

const { nombre, apellido, edad } = persona;

console.log(nombre);

console.log(persona.apellido)
console.log(persona.nombre, persona.apellido, persona.edad);

const colores = ["rojo", "verde", "azul"]
const [primera, segundo] = colores;

console.log("primero:", primera)
console.log("segundo:", segundo)

const a = [1,2]
const b = [...a, 3];

console.log("Arreglo original: ", a);
console.log("Arreglo nuevo: ", b)

const usuario = {};

console.log("Email: ", usuario?.perfil?.email);

const nombre2 = null ?? "Invitado";
const nombreVacio = "" ?? "Invitado";

console.log("Nombre null:", nombre2);
console.log("Nombre vacio:", nombreVacio);
