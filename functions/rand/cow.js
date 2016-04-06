var fs = require('fs');
var path = require('path');

var cows = fs.readFileSync(path.join(__dirname, 'cows.txt'), 'utf8')
		.replace(/\n$/, '').split('\n\n\n');

exports.path = '/';

exports.doc = {
  desc: 'Generate a cool cow',
  example: '/'
};

exports.handle = function(req, res, cb) {
  var cow = new String(cows[Math.floor(Math.random() * cows.length)]);
  cb(cow);
}