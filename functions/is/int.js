var validator = require('validator');

exports.path = '/:int';

exports.doc = {
  params: {
    int: PARAMS.STRING
  },
  desc: 'Check if a string is an integer',
  example: '/123'
};

exports.handle = function(req, res, cb) {
  cb(validator.isInt(req.params.int));
}

