exports.path = '/:text/:index';

exports.doc = {
  params: {
    text: PARAMS.STRING,
    index: PARAMS.INTEGER
  },
  desc: 'Return the character at a certain index in the string',
  example: '/hello/1'
};

exports.handle = function(req, res, cb) {
  cb(req.params.text.charAt(req.params.index));
}