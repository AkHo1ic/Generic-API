var validator = require('validator');

exports.path = '/:base64';

exports.doc = {
  params: {
    base64: PARAMS.STRING
  },
  desc: 'Check if a string is BASE64',
  example: '/bXkgY29vbCBtZXNzYWdl'
};

exports.handle = function(req, res, cb) {
  cb(validator.isBase64(req.params.base64));
}

