exports.path = '/:data';

exports.doc = {
  params: {
    data: PARAMS.BASE64
  },
  desc: 'ASCII to Base64',
  example: '/bXkgY29vbCBtZXNzYWdl'
};

exports.handle = function(req, res, cb) {
  var ascii = new Buffer(req.params.data, 'base64').toString('ascii');
  cb(ascii);
}