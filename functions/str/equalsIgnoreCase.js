exports.path = '/:a/:b';

exports.doc = {
  params: {
    a: PARAMS.STRING,
    b: PARAMS.STRING
  },
  desc: 'Check if 2 strings are equal, reguardless of case',
  example: '/hi/HI'
};

exports.handle = function(req, res, cb) {
  cb(req.params.a.toUpperCase() == req.params.b.toUpperCase());
}