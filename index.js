var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json()) // for parsing application/json

app.get('/', function(request, response) {
  response.send('¡Hooola node!');
})

app.post('/', function(request, response) {
  console.log('headers: ', request.headers)
  console.log('body: ', request.body)
  response.status(200).json(request.body).send()
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
