exports.path = '/:address';

exports.doc = {
  params: {
    address: PARAMS.DOMAIN_OR_IP
  },
  ret: PARAMS.STRING,
  desc: 'Get whois data about a domain or IP',
  example: '/google.com'
};

var whois = require('node-whois')

exports.handle = function(req, res, cb) {
  whois.lookup(req.params.address, function(err, data) {
    cb(data);
    //res.send({ data });
  });
}