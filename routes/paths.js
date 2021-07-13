var home = require('./home/index');
var api = require('./api/index');
var notFound = require('./errors/not-found/index');

var paths = new Map();
paths.set('/', home)
paths.set('/api', api);
paths.set('NOT-FOUND', notFound);

module.exports = paths;