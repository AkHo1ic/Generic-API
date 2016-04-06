var fs = require('fs');

exports.path = '/:randomLine?';
exports.doc = {
  params: {
    randomLine: PARAMS.BOOLEAN
  },
  desc: 'Get the Quran, the word of Allah',
  example: '/true'
};

var quran;
var quranLines;

fs.readFile(__dirname + '/quran.txt', function(err, file) {
  quran = file.toString();
  quranLines = quran.split('\n');
});

exports.handle = function(req, res, cb) {
  console.log(req.params.randomLine)
  if(req.params.randomLine == true) {
    var i = Math.floor(Math.random() * quranLines.length);
    cb(quranLines[i]);
  } else {
    cb(quran);
  }
};