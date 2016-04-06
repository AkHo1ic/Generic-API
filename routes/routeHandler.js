var express = require('express');
var fs = require('fs');
var config = require('../config.js');
var router = express.Router();
var now = Date.now();

var apiTree = {};
var routeLoader = require('./routeLoader.js')(router, apiTree, config);

routeLoader.loadFolder('./functions', '', '/');

console.log('Loaded', routeLoader.getLoaded(), 'commands in', Date.now()-now, 'ms');

router.get('/', function(req, res) {
  res.render('index');
});

/*
fs.writeFile('./api.json', JSON.stringify(apiTree, null, 2), function(err) {
  if (err) {
    console.log('Failed to create API file', err);
  }
}); 
*/

module.exports = router;
