var express = require('express');

var router = express.Router();
var controller = require('../controllers/product.controller');
//var validate = require('../validate/product.validate');

module.exports = router;

router.get('/', controller.index);

router.get('/cookie', function( req, res, next){
	res.cookie('product-id', 12345);
	res.send('hi');
});

router.get('/search', controller.search); 

router.get('/create', controller.create);

router.get('/:id', controller.view);


//router.post('/create', validate.postCreate, controller.postCreate);

