const miPromesa = new Promise((resolve, reject) => {
    const exito = false;
 
    setTimeout(() => {
        if (exito) {
            resolve('La promesa se ha cunplido con éxito');
        } else {
            reject('Error al cumplir la promesa');
        }
    }, 2000);
});
 
miPromesa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error("Error atrapado:", error); 
}).finally(() => {
    console.log('La promesa ha sido procesada');
});
 
function dividir(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject('Error: División por cero');
        } else {
            resolve(a / b);
        }
    });
}
 

dividir(10, 2)
    .then(res => console.log(`Resultado: ${res}`))
    .catch(err => console.error(err));
