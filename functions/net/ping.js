var ping = require ('net-ping');

exports.path = '/:address';

exports.doc = {
  params: {
    address: PARAMS.DOMAIN_OR_IP
  },
  desc: 'Ping an address to see if it is online',
  example: '/8.8.8.8'
};

exports.handle = function(req, res, cb) {
  var session;
  
  try {
    session = ping.createSession();
  } catch (e) {
    throw new Error('Cannot ping at this time');
  }
  
  var address = req.params.address;
  session.pingHost(address, function (error, target) {
    if (error) {
      throw error;
    } else {
      cb(target);
    }
  });
}