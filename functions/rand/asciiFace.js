var cool = require('cool-ascii-faces')

exports.path = '/';

exports.doc = {
  desc: 'Generate a cool ASCII face',
  example: '/'
};

exports.handle = function(req, res, cb) {
  cb(cool());
}