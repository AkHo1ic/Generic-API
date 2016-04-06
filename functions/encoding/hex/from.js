var conv = require('binstring');

exports.path = '/:data';

exports.doc = {
  params: {
    data: PARAMS.BASE64
  },
  desc: 'HEX to ASCII',
  example: '/6c6d616f'
};

exports.handle = function(req, res, cb) {
  var data = req.params.data;
  var result = conv(data, { in: 'hex', out: 'buffer' }).toString();
  cb(result);
};