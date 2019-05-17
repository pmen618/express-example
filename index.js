

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser') 
//var csurf = require('csurf');
var mongoose = require('mongoose');
//var multer = require('multer');
//var upload = multer();

mongoose.connect('mongodb://localhost/express-demo');
//process.env.MONGO_URL
var userRoutes = require('./routes/user.route');
var authRoutes = require('./routes/auth.route');
var cartRoutes = require('./routes/cart.route');
var transferRoutes = require('./routes/transfer.route');

var productRoutes = require('./routes/product.route');
var authMiddleware = require('./middleware/auth.middleware');
var sessionMiddleware = require('./middleware/session.middileware');

var db = require('./db');

var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views/');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
app.use(cookieParser('absdgjfdhshsgdgdhd')) // use to read format cookie﻿
app.use(sessionMiddleware);

app.get('/', function(req, res){
	//req.accepts('text/html');
	////res.send('Say hello to my little friend <a href="/users">User</a>');
	res.render('index', {
		name: 'My friend'
	});
	res.end();

});

app.use('/users', authMiddleware.requireAuth, userRoutes);
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/transfer', transferRoutes);

app.listen(port, function () {
	// body...
	console.log('Server listening on port ' + port);
});





//res.send('Say hello to my little friend <a href="/users">User</a>');
	//res.send(req.protocol); 
	//req.ip; req.cookies, req.params, req.query
	//req.body, req.baseurl
	//
	//res.append(field[val]), res.attachment(), res.cookie
	//res.clear, res.download, res.end, res.format, res.get, 
	//res.redirect, res.sendFile, res.set, res.status(code)