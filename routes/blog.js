var express = require("express");
var router = express.Router();
var xml2js = require('xml2js');
var parser = new xml2js.Parser();   //xml -> json
var request = require("request");
var config = require("./config");

router.get("/48HoursTopViewPosts", function (req, res, next) {
	requestBlogList("/blogApi/48HoursTopViewPosts/10", res);
});

router.get("/sitehome/recent", function (req, res, next) {
	requestBlogList("/blogApi/sitehome/recent/10", res);
});

router.get("/:id", function (req, res, next) {
	request.get(config.server + "/blogApi/post/body/" + req.params.id, function (err, respon, body) {
		var json = parser.parseString(body, function (err, result) {
			res.render("blog", result);
		});
	});
});

function requestBlogList(url, res) {
	request.get(config.server + url, function (err, respon, body) {
		var json = parser.parseString(body, function (err, result) {
			var blogData = getBlogData(result);
			res.send(blogData);
		});
	});
}

function getBlogData(blogData) {
	var feed = blogData.feed;
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