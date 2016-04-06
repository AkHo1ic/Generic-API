exports.path = '/:a/:b';
exports.doc = {
  params: {
    a: PARAMS.NUMBER,
    b: PARAMS.NUMBER
  },
  desc: 'Multiply 2 numbers together',
  example: '/10/6.4'
};

exports.handle = function(req, res, cb) {
  var a = req.params.a;
  var b = req.params.b;
  cb(a * b);
}