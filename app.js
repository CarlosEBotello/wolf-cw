//console.log('Hola mundo!','fuck yeah');

//var nombre = "Charly";
//var nick = "CharlyWazzup";

//console.log(nombre,'es', nick);

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
