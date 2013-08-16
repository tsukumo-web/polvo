// Generated by CoffeeScript 1.6.3
(function() {
  var config, connect, path;

  path = require('path');

  connect = require('connect');

  config = require('../utils/config');

  module.exports = function() {
    var address, index, port, root, _ref;
    _ref = config.server, root = _ref.root, port = _ref.port;
    index = path.join(root, 'index.html');
    connect().use(connect["static"](root)).use(function(req, res) {
      if (~(req.url.indexOf('.'))) {
        res.statusCode = 404;
        return res.end('File not found: ' + req.url);
      } else {
        return res.end(fs.readFileSync(index, 'utf-8'));
      }
    }).listen(port);
    address = 'http://localhost:' + port;
    return console.log("♫  " + address);
  };

}).call(this);

/*
//@ sourceMappingURL=server.map
*/