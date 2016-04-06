var generator = require('creditcard-generator');

exports.path = '/:type?';

exports.doc = {
  params: {
    type: PARAMS.STRING
  },
  desc: 'Returns a random credit card, types: [' + Object.keys(generator.Schemes).toString().split(',').join(', ') + ']',
  example: '/'
};

exports.handle = function(req, res, cb) {
  cb(generator.GenCC(req.params.type)[0]);
}