var randomstring = require('randomstring');

exports.path = '/:len';

exports.doc = {
  params: {
    len: PARAMS.INTEGER
  },
  desc: 'Random Alphanumeric Characters (A-Z, 0-9)',
  example: '/12'
};

exports.handle = function(req, res, cb) {
  var len = parseInt(req.params.len);
  
  if(len > 10000) {
    res.send({
      error: 'Length must be less than 10,000'
    });
    return;
  }
  
  var random = randomstring.generate({
    length: len,
    charset: 'alphanumeric'
  });
  
  cb(random);
}