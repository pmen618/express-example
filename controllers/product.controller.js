//var db = require('../db');
var Product = require('../models/product.model');

//var shortid = require('shortid');

module.exports.index = async function(req, res){
	//var page = parseInt(req.query.page) || 1;// n
	//var perPage= 8 //x
	//var start = (page -1 )* perPage;
	//var end = page * perPage;
	
	//var drop = (page-1)* perPage;
	//res.send('user list');
	//res.render('products/index', {
		//products : db.get('products').value().slice(start, end)
		
	//Cach 2: products : db.get('products').drop(drop).take(perPage).value()
	//});
	
	var products = await Product.find(); 
		res.render('products/index', {
			products:products
		});

};
