var leet = require('l33tsp34k');

exports.path = '/:text';

exports.doc = {
  params: {
    text: PARAMS.STRING
  },
  desc: 'Convert a string to ascii symbols',
  example: '/kyle%20is%20god'
};

function init(appjs) {
  appjs.database;
}

exports.handle = function(req, res, cb) {
  cb(leet(req.params.text));
};