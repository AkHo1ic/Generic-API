exports.path = '/:text/:search';

exports.doc = {
  params: {
    text: PARAMS.STRING,
    search: PARAMS.STRING
  },
  desc: 'Return the index that a given search occurs at',
  example: '/hello_world/world'
};

exports.handle = function(req, res, cb) {
  cb(req.params.text.indexOf(req.params.search));
}