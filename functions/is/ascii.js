var validator = require('validator');

exports.path = '/:ascii';

exports.doc = {
  params: {
    ascii: PARAMS.STRING
  },
  desc: 'Check if a string is ASCII',
  example: '/asd'
};

exports.handle = function(req, res, cb) {
  cb(validator.isAscii(req.params.ascii));
}

