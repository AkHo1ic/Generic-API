var validator = require('validator');

exports.path = '/:ip';

exports.doc = {
  params: {
    ip: PARAMS.STRING
  },
  desc: 'Check if a string is an ip',
  example: '/8.8.8.8'
};

exports.handle = function(req, res, cb) {
  cb(validator.isIP(req.params.ip));
}

