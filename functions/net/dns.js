var dns = require('dns');

exports.path = '/:domain';

exports.doc = {
  params: {
    domain: PARAMS.DOMAIN
  },
  desc: 'Resolve a domain name',
  example: '/google.com'
};

exports.handle = function(req, res, cb) {
  var domain = decodeURI(req.params.domain);
  
  dns.lookup(domain, function(err, addresses, family) {
    if(!err) {
      cb({
        address: addresses,
        family: family
      }); 
    } else {
      throw err;
    }
  });
}