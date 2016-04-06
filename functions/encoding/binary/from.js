var bfs = require('binary-to-string');

exports.path = '/:text';
exports.doc = {
  params: {
    text: PARAMS.STRING 
  },
  desc: 'Convert binary into a ASCII',
  example: 'https://%addr/encoding/binary/from/1110100%201101000%201101001%201110011'
};

exports.handle = function(req, res, cb) {
  var string = req.params.text;
  cb(bfs(string));
}