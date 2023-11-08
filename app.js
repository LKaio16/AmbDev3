var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Requisição POST bem-sucedida!');
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});
app.post('/divisao', function (req, res) {
    var body = req.body;
    var resultado = divisao(body.a, body.b);

res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado}`);
  console.log(body);
  res.send('via post');
    res.send('Response da requisição POST');
  });
  
  function divisao(a, b) {
    return a / b;
  }

  app.post('/multiplicacao', function (req, res) {
    var body = req.body;
    var resultado = multiplicacao(body.a, body.b);

res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
  console.log(body);
  res.send('via post');
    res.send('Response da requisição POST');
  });
  
  function multiplicacao(a, b) {
    return a * b;
  }

  app.post('/soma', function (req, res) {
    var body = req.body;
    var resultado = soma(body.a, body.b);

res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
  console.log(body);
  res.send('via post');
    res.send('Response da requisição POST');
  });
  
  function soma(a, b) {
    return a + b;
  }


  app.post('/sub', function (req, res) {
    var body = req.body;
    var resultado = soma(body.a, body.b);

res.send(`O resultado da sub de ${body.a} e ${body.b} é ${resultado}`);
  console.log(body);
  res.send('via post');
    res.send('Response da requisição POST');
  });
  
  function sub(a, b) {
    return a + b;
  }