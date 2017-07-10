var express = require("express");
var router = express.Router();
var xml2js = require('xml2js');
var http = require("http");
var parser = new xml2js.Parser();   //xml -> json

router.get("/48HoursTopViewPosts", function (req, res, next) {
	sendRequest("/blogApi/48HoursTopViewPosts/10", res);
});

router.get("/sitehome/recent", function (req, res, next) {
	sendRequest("/blogApi/sitehome/recent/10", res);
});

router.get("/:id", function (req, res, next) {
	console.log(req.params.id);
	sendRequest("/blogApi/post/body/" + req.params.id, res);
});

function sendRequest(url, res) {
	http.request({
		host: "localhost",
		port: "8888",
		path: url
	}, function (respon) {
		var receiveData = "";
		respon.on('data', function (data) {
			receiveData += data;
		});

		respon.on('end', function () {
			var json = parser.parseString(receiveData, function (err, result) {
				if (result.feed) {
					var blogData = getBlogData(result);
					res.send(JSON.stringify(blogData));
				} else {
					res.send(result.string);
				}
				
				//res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
			});
		});
	}).end();
}

function getBlogData(blogData) {
	var feed = blogData.feed;
	if (!feed) {
		return blogData;
	}

	var entry = feed.entry;

	var list = [];
	entry.forEach(function (el) {
		list.push({
			id: el.id[0],//文章id
			title: el.title[0]._,//文章标题
			summary: el.summary[0]._,//文章摘要
			published: el.published[0],//发布时间
			updated: el.updated[0],//最后更新时间
			author: {
				name: el.author[0].name[0],//作者
				homePage: el.author[0].uri[0]//作才主页
			},
			link: el.link[0].$.href,//文章链接
			diggs: el.diggs[0],//推荐数
			views: el.views[0],//阅读数
			comments: el.comments[0]//评论数
		});
	});

	return list;
}

module.exports = router;