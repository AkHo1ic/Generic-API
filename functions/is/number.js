var validator = require('validator');

exports.path = '/:number';

exports.doc = {
  params: {
    number: PARAMS.STRING
  },
  desc: 'Check if a string is an number',
  example: '/123456'
};

exports.handle = function(req, res, cb) {
  cb(validator.isNumeric(req.params.number));
}

