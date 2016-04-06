var flip = require('flip-text')

exports.path = '/:text';

exports.doc = {
  params: {
    text: PARAMS.STRING,
  },
  desc: 'Flips text upside down',
  example: '/hello'
};

exports.handle = function(req, res, cb) {
  cb(flip(req.params.text));  
}