var http = require('http');
var queryString = require('querystring');
var fs = require('fs');
var routes = require('./routes/paths');

function getUrlParams(url) {
    var bruteParams = url.substring(url.indexOf('?') + 1);
    return queryString.parse(bruteParams);
};

function getPath(url) {
    if (url.indexOf('?') != -1) {
        return url.substring(0, url.indexOf('?'));
    }
    return url;
}

var server = http.createServer((req, res) => {

    var urlParams = getUrlParams(req.url)
    var path = getPath(req.url);
    var route = routes.get(path) || routes.get('NOT-FOUND');
    route(req, res, urlParams);
});

server.listen(8080);