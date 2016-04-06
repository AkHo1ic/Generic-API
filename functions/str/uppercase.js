exports.path = '/:text';
exports.doc = {
  params: {
    text: PARAMS.STRING,
  },
  desc: 'Convert a string to uppercase',
  example: '/hi'
};

exports.handle = function(req, res, cb) {
  cb(req.params.text.toUpperCase());
}