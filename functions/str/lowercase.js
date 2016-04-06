exports.path = '/:text';

exports.doc = {
  params: {
    text: PARAMS.STRING
  },
  desc: 'Convert a string to lowercase',
  example: '/HI'
};

exports.handle = function(req, res, cb) {
  cb(req.params.text.toLowerCase());
}