function hola(nombre, micallback) {
    console.log("Hola soy una aplicacion asincrona")
    setTimeout(function () {

        console.log("Hola" + nombre);
        micallback()
    }, 1000);
}

function adios(nombre, otrocallback) {
    setTimeout(function () {
        console.log("Adios" + nombre)
        otrocallback()

    },1000)
}


console.log("Iniciando proceco")
hola('John', function name() {

    console.log("Terminando Proceco")
})
