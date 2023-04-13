const fs = require("fs");

function leer(ruta, cb) {
  fs.readFile(ruta, (error, data) => {
    console.log(data.toString());
  });
}

leer(__dirname + "/archivo.txt");

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (error) {
    if (error) {
      console.error("no he podido escribirlo", error);
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
}

escribir(__dirname + "/archivo1.txt", "Probando un archivo nuevo", console.log);

 function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}
console.log(" se borrara el archivo");
borrar(__dirname + "/archivo1.txt", console.log);
