async function hola(nombre, micallback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola" + nombre);
      resolve();
    }, 1000);
  });
}
async function hablar(nombre) {
  return new Promise((resolve, rejec) => {
    setTimeout(function () {
      console.log("Bla bla bla bla...");
      rejec();
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios" + nombre);
      resolve();
    }, 1000);
  });
}
console.log("Iniciando el proceso");

hola("john")
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log("Terminado el proceso");
  });

async function main() {
  await hola("Cotamo");
}

main();
