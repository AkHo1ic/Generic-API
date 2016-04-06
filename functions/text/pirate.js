var pirateSpeak = require('pirate-speak');

exports.path = '/:text';

exports.doc = {
  params: {
    text: PARAMS.STRING,
  },
  desc: 'Convert a message t\' a pirate message',
  example: '/hello'
};

exports.handle = function(req, res, cb) {
  cb(pirateSpeak.translate(req.params.text));  
}