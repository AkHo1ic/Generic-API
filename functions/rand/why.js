exports.path = '/';

exports.doc = {
  params: {},
  desc: 'Get the reason as to why we made such a pointless API',
  example: '/'
};

exports.handle = function(req, res, cb) {
  cb('because');
}