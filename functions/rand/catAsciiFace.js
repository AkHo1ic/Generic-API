var cats = require('cat-ascii-faces')

exports.path = '/';

exports.doc = {
  desc: 'Generate a cool CAT ASCII face',
  example: '/'
};

exports.handle = function(req, res, cb) {
  cb(cats());
}