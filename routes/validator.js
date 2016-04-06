var validator = require('validator');

var apiTree;

module.exports = function(tree) {
  apiTree = tree;
  return exports;
};

exports.validate = function(req, res, callback) {
  var apiDoc = getApiDoc(req.path, apiTree);
  if(!apiDoc) {
    // should never be called anyways because of routes
    res.sendStatus(404);
    return;
  }
  
  for(var param in apiDoc.params) {
    var data = req.params[param];
    var type = apiDoc.params[param];
    var err;
    
    if(data) {
      switch(type) {
        case 'STRING':
          req.params[param] = decodeURI(data);
          break;
          
        case 'INTEGER':
          var int = parseInt(data);
          if(isNaN(int)) {
            err = param + ' must be of type ' + type + ' e.x. ' + apiDoc.example;
          }
          req.params[param] = int;
          
          break;
        case 'UNSIGNED_SHORT':
          var short = parseInt(data);
          if(isNaN(short) || short > 65535) {
            err = param + ' must be of type ' + type + ' e.x. ' + apiDoc.example;
          }
          break;
        case 'DATE':
          var date = new Date(data);
          if(isNaN(date.valueOf())) {
            err = param + ' must be of type ' + type + ' e.x. ' + apiDoc.example;
          }
          req.params[param] = date;
          
          break;
          
        case 'UNIX_TIMESTAMP':
          var int = parseInt(data);
          
          if(isNaN(int) || !(int >= 0)) {
            err = param + ' must be of type ' + type + ' e.x. ' + apiDoc.example;
          }
          req.params[param] = date;
          
          break;
          
        case 'DOMAIN':
          if(!validator.isFQDN(data)) {
            err = param + ' must be of type ' + type + ' e.x. ' + apiDoc.example;
          }
          break;
          
        case 'IP':
          if(!validator.isIP(data)) {
            err = param + ' must be of type ' + type + ' e.x. ' + apiDoc.example;
          }
          break;
          
        case 'DOMAIN_OR_IP':
          if(!(validator.isIP(data) || validator.isFQDN(data))) {
            err = param + ' must be of type ' + type + ' e.x. ' + apiDoc.example;
          }
          break;
        
        case 'DOUBLE':
          var float = parseFloat(data);
          if(isNaN(float)) {
            err = param + ' must be of type ' + type + ' e.x. ' + apiDoc.example;
          }
          req.params[param] = float;
          
          break;
          
        case 'NUMBER':
          var float = parseFloat(data);
          if(isNaN(float)) {
            err = param + ' must be of type ' + type + ' e.x. ' + apiDoc.example;
          }
          req.params[param] = float;
          
          break;
          
        case 'BASE64':
          if(!validator.isBase64(data)) {
            err = param + ' must be of type ' + type + ' e.x. ' + apiDoc.example;
          }
          break;
          
        case 'BOOLEAN':
          var bool;
          
          if(data.toLowerCase() == 'true') {
            bool = true;
          } else if(data.toLowerCase() == 'false') {
            bool = false;
          } else {
            err = param + ' must be of type ' + type + ' e.x. ' + apiDoc.example;
          }
          
          req.params[param] = bool;
          break;
      }
    }
  }
  
  if(!err) {
    callback();
  } else {
    throw err;
    //res.send({ error: err });
  }
};



function getApiDoc(path, tree) {
  var i = path.indexOf('/');
  var key;
  
  if(path.indexOf('/', i + 1) == -1) {
    key = path.substring(i + 1);
  } else {
    key = path.substring(i + 1, path.indexOf('/', i + 1));
  }

  if(tree[key] && tree[key].desc) {
    return tree[key];
  } else {
    return getApiDoc(path.substring(path.indexOf('/', i + 1)), tree[key]);
  }
}