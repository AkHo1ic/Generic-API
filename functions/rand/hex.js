var randomstring = require('randomstring');

exports.path = '/:len';

exports.doc = {
  params: {
    len: PARAMS.INTEGER
  },
  desc: 'Random HEX (0-9, A-F)',
  example: '/12'
};

exports.handle = function(req, res, cb) {
  var len = parseInt(req.params.len);
  
  if(len > 10000) {
    throw new Error('Length must be less than 10,000');
  }
  
  var random = randomstring.generate({
    length: len,
    charset: 'hex'
  });
  
  cb(random);
}