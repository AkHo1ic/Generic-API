var validator = require('validator');

exports.path = '/:pattern/:string';

exports.doc = {
  params: {
    pattern: PARAMS.STRING,
    string: PARAMS.STRING
  },
  desc: 'Check if a string matches the passed pattern',
  example: '/[abc]+/acbca',
};

exports.handle = function(req, res, cb) {
  var r = new RegExp(req.params.pattern);
  var b = req.params.string.match(r);
  cb(b.length != 0 && b[0].length == req.params.string.length);
}