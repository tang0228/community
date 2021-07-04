const { getErr } = require('./getSendResult');
const { pathToRegexp } = require('path-to-regexp');
const jwt = require('../routes/jwt');
// token中间件
const needTokenApi = [
    // { method: "GET", path: "/user/:id" },
    // { method: "GET", path: "/fee/:id" },
    // { method: "GET", path: "/user/whoami" },
];
module.exports = (req, res, next) => {
    const apis = needTokenApi.filter(api => {
        const reg = pathToRegexp(api.path);
        return api.method === req.method && reg.test(req.path);
    });
    if (apis.length === 0) {
        next();
        return;
    }
    const result = jwt.verify(req);
    if (result) {
        // 认证通过
        req.homeId = result.id;
        next();
    } else {
        // 未通过认证
        hanleNonToken(req, res, next);
    }
};

function hanleNonToken(req, res, next) {
    res.status(403).send(getErr("you don not have token to access the api", 403))
}