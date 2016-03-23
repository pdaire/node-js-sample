var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  console.log(request);
  response.send('¡Hooola node!');
})

app.post('/', function(request, response) {
  console.log(request);
  response.status(200).send();
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
