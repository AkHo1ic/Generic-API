exports.path = '/';
exports.doc = {
  params: {},
  desc: 'Get your IP address',
  example: '/'
};

exports.handle = function(req, res, cb) {
  cb(req.ip.toString());
}