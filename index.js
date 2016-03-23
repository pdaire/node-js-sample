var express =  + require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  console.log(req);
  res.send('¡Hooola node!');
})

app.post('/', function(req, res) {
  console.log('cookies: ' + req.cookies);
  console.log('fresh: ' + req.fresh);
  console.log('hostname: ' + req.hostname);
  console.log('ip: ' + req.ip);
  console.log('ips: ' + req.ips);
  console.log('method: ' + req.method);
  console.log('originalUrl: ' + req.originalUrl);
  console.log('params: ' + req.params);
  console.log('path: ' + req.path);
  console.log('protocol: ' + req.protocol);
  console.log('query: ' + req.query);
  console.log('route: ' + req.route);
  console.log('secure: ' + req.secure);
  console.log('signedCookies: ' + req.signedCookies);
  console.log('stale: ' + req.stale);
  console.log('subdomains: ' + req.subdomains);
  console.log('xhr: ' + req.xhr);
  res.status(200).send();
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
