function asincrona(callback) {
  setTimeout(function () {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (e) {
      callback(e);
    }
  }, 100);
}

asincrona(function (err, dato) {
    if(err){
        console.error('tenemos un error')
        console.error(err)
        return false
    }
    console.log('todo esta bien ')
});
 