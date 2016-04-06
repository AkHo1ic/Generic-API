var s2b = require('string-to-binary');

exports.path = '/:data';
exports.doc = {
  params: {
    text: PARAMS.STRING 
  },
  desc: 'Convert a string to binary',
  example: '/this%20is%20binary'
}

exports.handle = function(req, res, cb) {
  var data = req.params.data;
  cb(s2b(data));
}