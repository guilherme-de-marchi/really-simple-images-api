var fs = require('fs');

var httpMethods = new Map();
httpMethods.set('GET', get);

function get(req, res, urlParams) {
    var responseData;
    try {
        responseData = fs.readFileSync(`./statics/images/${urlParams.id}.jpg`, (err, data) => data);
    } catch (error) {
        responseData = 'Not Found';
        res.statusCode = 404;
    }

    res.write(responseData);
    res.end();
};

module.exports = (req, res, urlParams) => { httpMethods.get(req.method)(req, res, urlParams) };