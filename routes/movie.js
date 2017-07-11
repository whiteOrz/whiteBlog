var express = require('express');
var router = express.Router();
var request = require("request");
var config = require("./config");

router.get('/in_theaters', function (req, res, next) {
    request.get(config.server + "/movieApi/in_theaters", function (err, response, body) {
        res.send(body);
    })
});

module.exports = router;