function hola(nombre, micallback) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {

            console.log("Hola" + nombre);
            resolve()
        }, 1000);

    });
}
function hablar(callbackHablar) {
    setTimeout(function () {
        console.log("Bla bla bla bla...")
        callbackHablar()
    }, 1000)
}

function adios(nombre, otrocallback) {
    setTimeout(function () {
        console.log("Adios" + nombre)
        otrocallback()

    }, 1000)
}
console.log("Iniciando el proceso")
    
hola("john").then((nombre) => {
    console.log("Terminado el proceso")

})