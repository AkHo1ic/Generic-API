exports.path = '/:minuend/:subtrahend';
exports.doc = {
  params: {
    minuend: PARAMS.NUMBER,
    subtrahend: PARAMS.NUMBER
  },
  desc: 'Subtract 2 numbers',
  example: '/8/4'
};

exports.handle = function(req, res, cb) {
  var m = req.params.minuend;
  var s = req.params.subtrahend;
  cb(m-s);
}