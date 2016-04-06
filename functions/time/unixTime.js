var timeunit = require('timeunit');

exports.path = '/:unit?';

exports.doc = {
  params: {
    unit: PARAMS.STRING
  },
  desc: 'Get the time since the unix epoch',
  example: '/seconds'
};

exports.handle = function(req, res, cb) {
  var now = Date.now();
  var unit = req.params.unit;
  if (!unit) {
    unit = 'milliseconds';
  }
  var tunit = timeunit[unit];
  if (tunit) {
    var time = tunit.convert(now, timeunit.milliseconds);
    time = Math.floor(time);
    cb({ time: time, unit: unit });
  } else {
    throw new Error('Uknown unit ' + unit);
  }
}