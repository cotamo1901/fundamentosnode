const bcript = require("bcrypt");

const password = "1234Soni2GLP";

bcript.hash(password, 5, function (err, hash) {
  console.log(hash);

  bcript.compare(password, hash,function (err,res) {
    console.log(res)
  });
});
