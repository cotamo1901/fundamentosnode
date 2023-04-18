const http = require("http");

http.createServer(function (req, res) {
    console.log("nueva peticion");
    console.log(req.url);
    res.write("Hola esto es una prueba");
    res.end();
  })
  .listen(3000);

console.log("Escuchando Http en el puerto 3000");
