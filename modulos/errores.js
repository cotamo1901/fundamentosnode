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
  console.error(error.message);
  console.log("Pero no pasa nada lo hemos capturado")
}
