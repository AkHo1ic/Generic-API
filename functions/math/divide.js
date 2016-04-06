exports.path = '/:a/:b';
exports.doc = {
  params: {
    a: PARAMS.NUMBER,
    b: PARAMS.NUMBER
  },
  desc: 'Divide 2 numbers',
  example: '/24/6'
};

exports.handle = function(req, res, cb) {
  var a = req.params.a;
  var b = req.params.b;
  var result = (a / b);
  if (b == 0) {
    result = "undefined";
  }
  
  cb(result);
}