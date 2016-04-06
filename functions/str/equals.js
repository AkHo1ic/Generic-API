exports.path = '/:a/:b';
exports.doc = {
  params: {
    a: PARAMS.STRING,
    b: PARAMS.STRING
  },
  desc: 'Check if 2 strings are the same',
  example: '/hi/hi'
};

exports.handle = function(req, res, cb) {
  cb(req.params.a == req.params.b);
}