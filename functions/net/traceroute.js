var traceroute = require('traceroute');

exports.path = '/:address';
exports.doc = {
  params: {
    address: PARAMS.DOMAIN_OR_IP
  },
  desc: 'Perform a traceroute on an address',
  example: '/8.8.8.8'
}

exports.handle = function(req, res, cb) {
  var address = req.params.address;
  console.log("Address: " + address);
  traceroute.trace(address, function (err,hops) {
    if (!err) {
      cb(hops);
    } else {
      throw err;
    }
  });
}