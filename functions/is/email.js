var validator = require('validator');

exports.path = '/:email';

exports.doc = {
  params: {
    email: PARAMS.STRING
  },
  desc: 'Check if a string is an email',
  example: '/Hadys1981@einrot.com'
};

exports.handle = function(req, res, cb) {
  cb(validator.isEmail(req.params.email));
}

