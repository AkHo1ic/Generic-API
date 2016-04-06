var validator = require('validator');

exports.path = '/:boolean';

exports.doc = {
  params: {
    boolean: PARAMS.STRING
  },
  desc: 'Check if a string is an boolean',
  example: '/true'
};

exports.handle = function(req, res, cb) {
  cb(validator.isBoolean(req.params.boolean));
}

