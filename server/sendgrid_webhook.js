var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'uniquehermesqwert' }, function(err, tunnel) {
  console.log('LT running')
});