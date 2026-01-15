function saludar() {
    return console.log("Hola");
}

function sumar(a, b) {
    return console.log (a + b);
}

const saludar2 = function(){
    return console.log(`hola`);
}

const sumar2 = (a, b) => {
    return console.log(a + b);
}

const sumar3 = (a,b) => console.log(a + b);

sumar3(3, 4);

function ejemplo(callback){
    callback();
}

ejemplo(() => {
    console.log("Ejecutando callback");
})

const sumar4 = (a, b, callback) => {
    const resultado = callback(a,b);
    console.log("El resultado es: " + resultado);
}

sumar4(10, 20, (x, y) => x + y);
