var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var opn = require('opn');
var proxy = require('http-proxy-middleware');

var index = require('./routes/index');
var users = require('./routes/users');
var blog = require("./routes/blog");
var movie = require("./routes/movie");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//router
app.use('/', index);
app.use('/users', users);
app.use("/blog", blog);
app.use("/movie", movie);

//proxy
app.use("/blogApi", proxy({
	target: 'http://wcf.open.cnblogs.com',
	changeOrigin: true,
	pathRewrite: {
		'^/blogApi': '/blog'
	}
}));

app.use("/newsApi", proxy({
	target: 'http://wcf.open.cnblogs.com',
	changeOrigin: true,
	pathRewrite: {
		'^/newsApi': '/news'
	}
}));

app.use("/movieApi", proxy({
	target: 'https://api.douban.com/v2',
	changeOrigin: true,
	pathRewrite: {
		'^/movieApi': '/movie'
	}
}));

//博客服务接口：http://wcf.open.cnblogs.com/blog/help
//新闻服务接口：http://wcf.open.cnblogs.com/news/help

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

app.listen(8888, function () {
	console.log("server start....");
	//opn("http://localhost:8888");
});

module.exports = app;
