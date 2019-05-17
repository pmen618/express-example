var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req, res){
	//res.send('user list');
	res.render('users/index', {
		users : db.get('users').value()
	});
};

module.exports.search = function (req, res){
	var q = req.query.q ;
	var macthedUsers = users.filter(function(user){
		return users.name.toLowerCase().indexOf(q.toLowerCase) !== -1;
	});

	res.render('users/index', {
		users: macthedUsers
	});
	//console.log(req.query);
};

module.exports.create = function(req, res){
	res.render('users/create');
};

module.exports.view = function(req, res){
	var id= req.params.id;

	var user= db.get('users').find({ id: id}).value();

	res.render('users/view', {	
		user: user
	});
};

module.exports.postCreate = function(req, res){
	req.body.id = shortid.generate();
	req.body.avatar = req.file.path.split('\\').slice(1).join('/');

	console.log(res.locals);

	db.get('users').push(req.body).write();
	res.redirect('/users');
	//console.log(req.body);
};