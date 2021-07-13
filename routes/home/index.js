var httpMethods = new Map();
httpMethods.set('GET', get);

function get(req, res, urlParams) {
    responseData = '<h1>Irineu</h1>';

    res.write(responseData);
    res.end();
};

module.exports = (req, res, urlParams) => { httpMethods.get(req.method)(req, res, urlParams) };