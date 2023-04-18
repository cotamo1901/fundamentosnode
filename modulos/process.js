process.on("beforeExit", () => {
  console.log("El proceso acabo");
});

process.on("exit", () => {
  console.log("El proceso acabo");
});

process.on("uncaughException", (err, origen) => {
  console.error("Se ha olvidado capturar un error ");
  console.error(err);
});

dfdsg();
