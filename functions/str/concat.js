exports.path = '/:a/:b';

exports.doc = {
  params: {
    a: PARAMS.STRING,
    b: PARAMS.STRING
  },
  desc: 'Combine 2 strings',
  example: '/hel/lo'
};

exports.handle = function(req, res, cb) {
  cb(req.params.a + req.params.b);
}