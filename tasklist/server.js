var app = require('./bootstrap/app')
var port = process.env.PORT || 3000

app.listen(port, function () {
  console.log('Servidor rodando em http://localhost:%s', port)
})