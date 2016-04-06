var router;
var apiTree
var validator;
var config; 

module.exports = function(r, a, c) {
  router = r;
  apiTree = a;
  config = c;
  validator = require('./validator')(apiTree);
  return exports;
}

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

function setupRoute(webPath, route, name) {
  var path = webPath + name + route.path;
  buildRoute(path, false, route);
  buildRoute(webPath + name + route.path + (route.path.charAt(route.path.length-1) == '/' ? '' : '/') +'raw', true, route);
  buildRoute(path.endsWith('?'), true, route);
  documentRoute(webPath, route, name, path);
}

function documentRoute(webPath, route, name, path) {
  var apiPath = webPath.split('/').join('.').substring(1) + name;
  
  if (route.doc) {
    if (!route.doc.desc) {
      console.warn('No description for', apiPath);
    }
    
    if (!route.doc.example) {
      console.warn('No example for', apiPath);
    } else {
      route.doc.example = config.address + webPath + name + route.doc.example;
    }
    
    route.doc.url = path;
    
    resolveObject(apiTree, apiPath, route.doc);
  } else {
    resolveObject(apiTree, apiPath);
    console.warn('No docs found for', apiPath);
  }
}

function buildRoute(url, raw, route) {
  router.get(url, function(req, res) {
    try {
      validator.validate(req, res, function() {
        route.handle(req, res, function(obj) {
          if (raw) {
            var str;
            if (typeof obj == 'string') {
              str = obj;
            } else {
              str = JSON.stringify(obj, null, 2);
            }
            res.send(str);
          } else {
            res.send(createObject(obj, route.doc.ret));
          }
        });
      });
    } catch (e) {
      res.send({ error: e.toString() });
      console.log(e);
    }
  });
}

function createObject(obj, type) {// type might be used in the future, idk...
  return { result: obj };
}

function resolveObject(json, path, def) {
  if (path.indexOf('.') > -1) {
    var i = path.indexOf('.');
    var name = path.substring(0, i);
    var newPath = path.substring(i+1, path.length);
    if (!json[name]) {
      json[name] = {};
    }
    return resolveObject(json[name], newPath, def);
  } else {
    if (!json[path]) {
      json[path] = def;
    }
    return json[path];
  }
}

exports.setupRoute = setupRoute;