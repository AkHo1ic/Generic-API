var validator = require('validator');

exports.path = '/:json';

exports.doc = {
  params: {
    json: PARAMS.STRING
  },
  desc: 'Check if a string is JSON',
  example: '/' + { asd: 'fgh' }
};

exports.handle = function(req, res, cb) {
  cb(validator.isJSON(req.params.json));
}

