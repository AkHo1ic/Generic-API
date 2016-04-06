var conv = require('binstring');

exports.path = '/:data';

exports.doc = {
  params: {
    data: PARAMS.STRING
  },
  desc: 'ASCII to HEX',
  example: '/my%20cool%20message'
};

exports.handle = function(req, res, cb) {
  var data = req.params.data;
  var result = conv(data, { out: 'hex' });
  cb(result);
};