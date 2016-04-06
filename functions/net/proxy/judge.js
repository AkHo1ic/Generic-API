var url = require('url');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var getProxyType = require('check-proxy').ping;

exports.path = '/';
exports.doc = {
  desc: 'Get proxy information',
  example: '/'
};

exports.handle = function(req, res, cb) {
	var result = getProxyType(req.headers, req.query, req.body, req.cookies);
	console.log('Q:', JSON.stringify(req.query, null, 2));
	cb(getProxyType(req.headers, req.query, req.body, req.cookies));
}