var validator = require('validator');

exports.path = '/:creditCard';

exports.doc = {
  params: {
    creditCard: PARAMS.STRING
  },
  desc: 'Check if a string is an credit card, hiphens allowed',
  example: '/4364508980061323'
};

exports.handle = function(req, res, cb) {
  cb(validator.isCreditCard(req.params.creditCard));
}

