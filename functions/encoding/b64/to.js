exports.path = '/:data';

exports.doc = {
  params: {
    data: PARAMS.STRING
  },
  desc: 'Base64 to ASCII',
  example: '/my%20cool%20message'
};

exports.handle = function(req, res, cb) {
  var base64 = new Buffer(req.params.data).toString('base64');
  cb(base64);
}