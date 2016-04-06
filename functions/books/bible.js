var fs = require('fs');

exports.path = '/:randomLine?';
exports.doc = {
  params: {
    randomLine: PARAMS.BOOLEAN
  },
  desc: 'Get the Bible, the word of the Christian God',
  example: '/true'
};

var bible;
var bibleLines;

fs.readFile(__dirname + '/bible.txt', function(err, file) {
  bible = file.toString();
  bibleLines = bible.split('\n');
});

exports.handle = function(req, res, cb) {
  if(req.params.randomLine == true) {
    var i = Math.floor(Math.random() * bibleLines.length);
    cb(bibleLines[i]);
  } else {
    cb(bible);
  }
};