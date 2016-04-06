var data = require('emoticon-data');
var _ = require('underscore');

exports.path = '/';

exports.doc = {
    params: {},
    desc: 'Get a random emoji',
    example: '/'
};

exports.handle = function(req, res, cb) {
  var emoji = _.sample(data.emoticons, 1)[0].string;
  cb(emoji);
}