var checkProxy = require('check-proxy').check;

exports.path = '/:address/:port';
exports.doc = {
  params: {
    address: PARAMS.DOMAINORIP,
    port: PARAMS.UNSIGNED_SHORT
  },
  ret: PARAMS.STRING,
  desc: 'Get proxy information',
  example: '/todo'
};

exports.handle = function(req, res, cb) {
  var ip = req.params.address;
  var port = req.params.port;
  
  checkProxy({
    testHost: 'http://' + process.env.HOST + '/net/proxy/judge', // put your ping server url here 
    proxyIP: ip,
    proxyPort: port, // proxy port to test 
    localIP: 'localhost', // local machine IP address to test 
    websites: []
  }).then(cb, function(err) {
    throw err;
  });
}