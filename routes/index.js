var express = require('express');
var router = express.Router();
var xml2js = require('xml2js');
var http = require("http");
var parser = new xml2js.Parser();   //xml -> json

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/48HoursTopViewPosts", function (req, res, next) {

  var _res = res;
  http.request({
    host: "localhost",
    port: "8888",
    path: "/blogApi/48HoursTopViewPosts/20"
  }, function (res) {
    var receiveData = "";
    res.on('data', function (data) {
      receiveData += data;
    });

    res.on('end', function () {
      var json = parser.parseString(receiveData, function (err, result) {
        console.log(result);

        _res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
        _res.write(JSON.stringify(result));
        _res.end();
      });
    });
  }).end();
});

module.exports = router;
