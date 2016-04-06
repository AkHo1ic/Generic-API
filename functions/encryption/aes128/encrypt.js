var crypto = require('crypto');
var algorithm = 'AES128';

exports.path = '/:key/:data';

exports.doc = {
  params: {
    key: PARAMS.STRING,
    data: PARAMS.STRING
  },
  desc: 'Encrypt AES128',
  example: '/s3cr3t_k3y/my%20secret%20message'
};

exports.handle = function(req, res, cb) {
  var key = req.params.key;
  var data = req.params.data;
  
  var cipher = crypto.createCipher(algorithm, key);
  var encrypted = cipher.update(data, 'utf8', 'hex')
  encrypted += cipher.final('hex');
  
  cb(encrypted);
}