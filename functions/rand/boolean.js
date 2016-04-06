exports.path = '/';

exports.doc = {
  params: {},
  desc: 'Returns a random boolean (true/false)',
  example: '/'
};

exports.handle = function(req, res, cb) {
  cb(Math.random() >= .5);
}