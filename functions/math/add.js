exports.path = '/:augend/:addend';
exports.doc = {
  params: {
    augend: PARAMS.NUMBER,
    addend: PARAMS.NUMBER
  },
  desc: 'Add 2 numbers together',
  example: '/14/12.01'
}

exports.handle = function(req, res, cb) {
  var ad = req.params.augend;
  var ag = req.params.addend;
  cb(ad + ag);
}