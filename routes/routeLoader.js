const fs = require('fs');

var routeBuilder;
var router;
var apiTree;
var loaded;
var config;

module.exports = function(r, a, c) {
  routeBuilder = require('./routeBuilder.js')(r, a, c);
  router = r;
  apiTree = a;
  config = c;
  loaded = 0;
  return exports;
}

function getLoaded() {
  return loaded;
}

function loadFolder(folderName, currentPath, webPath) {
  var path = currentPath + folderName;
  fs.readdirSync(path).forEach(function(file) {
    var filePath = path + '/' + file;
    
    if (fs.lstatSync(filePath).isDirectory()) {
      loadFolder(file, path + '/', webPath + file + '/');
    } else if (file.indexOf('.js') != -1) {
      loadFile(filePath, file, webPath);
    }
  });
}

function loadFile(filePath, file, webPath) {
  var route = require('../' + filePath);
  var name = file.substring(0, file.indexOf('.'));
  if(!route.path) throw 'No route path specified'; 
  if(!route.handle) throw 'No handler function specified';
  
  routeBuilder.setupRoute(webPath, route, name);  
  
  console.log(length('Loaded route ' + file + ' to', 40), webPath + name + route.path);
  loaded++;
}

function length(string, length) {
  while (string.length < length) {
    string += ' ';
  }
  return string;
}

exports.loadFolder = loadFolder;
exports.getLoaded = getLoaded;