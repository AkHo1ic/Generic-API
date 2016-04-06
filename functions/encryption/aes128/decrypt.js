var crypto = require('crypto');
var algorithm = 'AES128';

exports.path = '/:key/:data';

exports.doc = {
  params: {
    key: PARAMS.STRING,
    data: PARAMS.STRING
  },
  desc: 'Decrypt AES128',
  example: '/s3cr3t_k3y/db69fabbe79e48548c34a6985023c41e6c'
};

exports.handle = function(req, res, cb) {
  var key = req.params.key;
  var data = req.params.data;
  
  var decipher = crypto.createDecipher(algorithm, key);
  var decrypted = decipher.update(data, 'hex', 'utf8')
  decrypted += decipher.final('utf8');
  
  cb(decrypted);
}