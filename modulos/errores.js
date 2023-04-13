function otrafuncion() {
    return serompe()
}


function serompe() {
  return 3 + z;
}

try {
  serompe();
} catch (error) {
  console.log("algo se ah roto");
  console.error(error);   //  se puede colocar error.messaje para que solo muestre el error 
  console.log("Pero no pasa nada lo hemos capturado")
}
