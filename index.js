var express =  + require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  console.log(req);
  res.send('¡Hooola node!');
})

app.post('/', function(req, res) {
  console.log("request: "+ req)
  res.status(200).send();
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
