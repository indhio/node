var morgan = require('morgan')
var consign = require('consign')
var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var app = express()

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({
  extended: true
}))

app.engine('.hbs', hbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))
app.set('view engine', '.hbs')

consign()
  .include('models')
  .then('controllers')
  .then('routes')
  .into(app)

module.exports = app
