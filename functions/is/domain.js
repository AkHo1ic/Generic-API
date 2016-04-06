var validator = require('validator');

exports.path = '/:domain';

exports.doc = {
  params: {
    domain: PARAMS.STRING
  },
  desc: 'Check if a string is a domain',
  example: '/true'
};

exports.handle = function(req, res, cb) {
  cb(validator.isFQDN(req.params.domain));
}

