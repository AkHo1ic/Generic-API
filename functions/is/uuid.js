var validator = require('validator');

exports.path = '/:uuid';

exports.doc = {
  params: {
    uuid: PARAMS.STRING
  },
  desc: 'Check if a string is an uuid',
  example: '/8434b29f-ca2f-4730-935f-c14b803d0e17'
};

exports.handle = function(req, res, cb) {
  cb(validator.isUUID(req.params.uuid));
}

