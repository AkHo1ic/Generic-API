var crypto = require('crypto');
var algorithm = 'MD5';

exports.path = '/:data';

exports.doc = {
  params: {
    key: PARAMS.STRING,
    data: PARAMS.STRING
  },
  desc: 'MD5 Hash',
  example: '/my%20secret%20message'
};

exports.handle = function(req, res, cb) {
  var data = req.params.data;
  var hash = crypto.createHash(algorithm).update(data).digest('hex');
  
  cb(hash);
}