var textStats = require('text-stats');

exports.path = '/:text';

exports.doc = {
  params: {
    text: PARAMS.STRING,
  },
  desc: 'Get completely useless stats about a string',
  example: '/The dog jumped over the wall'
};

exports.handle = function(req, res, cb) {
  var stats = textStats.stats(req.params.text);
  remap(stats, 'carpar', 'charactersPerParagraph');
  remap(stats, 'gulpease', 'gulpeaseIndex');
  remap(stats, 'gunningFog', 'gunningFogIndex');
  cb(stats);  
}

function remap(obj, paramName, newName) {
  obj[newName] = obj[paramName];
  delete obj[paramName];
}