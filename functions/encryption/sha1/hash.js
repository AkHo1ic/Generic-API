var crypto = require('crypto');
var algorithm = 'SHA1';

exports.path = '/:data';

exports.doc = {
  params: {
    key: PARAMS.STRING,
    data: PARAMS.STRING
  },
  desc: 'SHA1 Hash',
  example: '/my%20secret%20message'
};

exports.handle = function(req, res, cb) {
  var data = req.params.data;
  var hash = crypto.createHash(algorithm).update(data).digest('hex');
  
  cb(hash);
}