var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  console.log(req);
  res.send('¡Hooola node!');
})

app.post('/', function(req, res) {
  console.log(req.cookies);
  console.log(req.fresh);
  console.log(req.hostname);
  console.log(req.ip);
  console.log(req.ips);
  console.log(req.method);
  console.log(req.originalUrl);
  console.log(req.params);
  console.log(req.path);
  console.log(req.protocol);
  console.log(req.query);
  console.log(req.route);
  console.log(req.secure);
  console.log(req.signedCookies);
  console.log(req.stale);
  console.log(req.subdomains);
  console.log(req.xhr);
  res.status(200).send();
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
